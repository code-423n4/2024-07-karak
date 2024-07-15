// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "forge-std/Test.sol";

import "../../src/Core.sol";
import "../../src/Vault.sol";
import "../../src/SlashingHandler.sol";
import "../../src/Querier.sol";

import "./ProxyDeployment.sol";
import "./contracts/ERC20Mintable.sol";
import "./contracts/MockDSS.sol";
import "./OperatorContract.sol";

contract OperatorHelper is Test {
    Core core;
    address operator = address(12);
    OperatorContract operatorSC = new OperatorContract();
    address vaultImpl = address(new Vault());
    address manager = address(20);
    address proxyAdmin = address(30);
    address vetoCommittee = address(31);
    address slashingHandler;
    ERC20Mintable depositToken;
    IKarakBaseVault[] vaults;
    IDSS dss = IDSS(address(new MockDSS()));
    Querier querier;
    uint256 dssMaxSlashablePercentageWad = 30 * Constants.ONE_WAD;
    IDSS dss2 = IDSS(new MockDSS());
    uint256 dss2MaxSlashablePercentageWad = 50 * Constants.ONE_WAD;

    function setUp() public {
        uint32 hookCallGasLimit = 500_000;
        uint32 hookGasBuffer = 40_000;
        uint32 supportsInterfaceGasLimit = 20_000;
        depositToken = new ERC20Mintable();
        depositToken.initialize("Test", "TST", 18);
        core = Core(ProxyDeployment.deployTransparentUpgradeable(address(new Core()), proxyAdmin));
        core.initialize(vaultImpl, manager, vetoCommittee, hookCallGasLimit, supportsInterfaceGasLimit, hookGasBuffer);

        querier = new Querier(address(core));

        IERC20[] memory supportedAssets = new IERC20[](1);
        supportedAssets[0] = IERC20(address(depositToken));
        slashingHandler = ProxyDeployment.deployTransparentUpgradeable(address(new SlashingHandler()), proxyAdmin);
        ISlashingHandler(slashingHandler).initialize(proxyAdmin, supportedAssets);

        // Allowlist asset
        address[] memory assets = new address[](1);
        assets[0] = address(depositToken);

        // Slashing Handlers for the asset
        address[] memory slashingHandlers = new address[](1);
        slashingHandlers[0] = slashingHandler;

        core.allowlistAssets(assets, slashingHandlers);

        vm.prank(address(dss));
        core.registerDSS(dssMaxSlashablePercentageWad);

        vm.prank(address(dss2));
        core.registerDSS(dss2MaxSlashablePercentageWad);
    }

    function registerIntoDSS() public {
        vm.prank(operator);
        core.registerOperatorToDSS(dss, "");
    }

    function addVaults() public {
        registerIntoDSS();
        // Deploy Vaults
        VaultLib.Config[] memory vaultConfigs = new VaultLib.Config[](2);
        vaultConfigs[0] = VaultLib.Config({
            asset: address(depositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault",
            symbol: "TV",
            extraData: bytes("")
        });
        vaultConfigs[1] = VaultLib.Config({
            asset: address(depositToken),
            decimals: 18,
            operator: operator,
            name: "TestVault2",
            symbol: "TV2",
            extraData: bytes("")
        });
        vm.prank(operator);
        vaults = core.deployVaults(vaultConfigs, address(0));
    }

    function deposit_into_vaults() public {
        addVaults();
        depositToken.mint(address(this), 2000);
        depositToken.approve(address(vaults[0]), 1000);
        depositToken.approve(address(vaults[1]), 1000);
        IVault(address(vaults[0])).deposit(1000, address(this), 0);
        IVault(address(vaults[1])).deposit(1000, address(this), 0);
    }

    function stake_vaults_to_dss() public {
        deposit_into_vaults();
        address requestedVault = address(vaults[0]);
        address requestedVault1 = address(vaults[1]);
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: requestedVault, dss: dss, toStake: true});
        Operator.StakeUpdateRequest memory stakeUpdate1 =
            Operator.StakeUpdateRequest({vault: requestedVault1, dss: dss, toStake: true});
        vm.startPrank(operator);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate = core.requestUpdateVaultStakeInDSS(stakeUpdate);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate1 = core.requestUpdateVaultStakeInDSS(stakeUpdate1);

        vm.warp(block.timestamp + Constants.MIN_STAKE_UPDATE_DELAY + 1);

        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate);
        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate1);
        vm.stopPrank();
    }

    function update_vault_stake_to_dss(address requestedVault, bool toStake, IDSS reqDSS) public {
        Operator.StakeUpdateRequest memory stakeUpdate =
            Operator.StakeUpdateRequest({vault: requestedVault, dss: reqDSS, toStake: toStake});
        vm.startPrank(operator);
        Operator.QueuedStakeUpdate memory queuedStakeUpdate = core.requestUpdateVaultStakeInDSS(stakeUpdate);

        vm.warp(block.timestamp + Constants.MIN_STAKE_UPDATE_DELAY);
        core.finalizeUpdateVaultStakeInDSS(queuedStakeUpdate);
        vm.stopPrank();
    }

    function compute_slashable_assets(address[] memory vaults, uint256[] memory initStakes)
        public
        view
        returns (uint256[] memory slashableAssets)
    {
        slashableAssets = new uint256[](vaults.length);
        for (uint256 i = 0; i < vaults.length; i++) {
            slashableAssets[i] =
                Math.mulDiv(initStakes[i], IVault(vaults[i]).totalAssets(), Constants.MAX_SLASHING_PERCENT_WAD);
        }
    }

    function compute_post_slashed_assets_in_vault(address vault, uint256 slashPercentageWad)
        public
        view
        returns (uint256)
    {
        uint256 earmarkedStakes =
            Math.mulDiv(slashPercentageWad, IVault(vault).totalAssets(), Constants.MAX_SLASHING_PERCENT_WAD);
        return IVault(vault).totalAssets() > earmarkedStakes ? IVault(vault).totalAssets() - earmarkedStakes : 0;
    }

    function compute_slashed_assets(address vault, uint256 slashPercentageWad, uint256 initStakeWAD)
        public
        view
        returns (uint256)
    {
        uint256 netSlashWAD = Math.mulDiv(initStakeWAD, slashPercentageWad, Constants.MAX_SLASHING_PERCENT_WAD);
        uint256 earmarkedStakes =
            Math.mulDiv(netSlashWAD, IVault(vault).totalAssets(), Constants.MAX_SLASHING_PERCENT_WAD);
        return Math.min(IVault(vault).totalAssets(), earmarkedStakes);
    }

    function compute_post_slashed_stake(
        address[] memory vaults,
        uint256[] memory slashedAssets,
        uint256[] memory slashableAssets
    ) public view returns (uint256[] memory stakes) {
        stakes = new uint256[](vaults.length);
        for (uint256 i = 0; i < vaults.length; i++) {
            console.log(slashedAssets[i], slashableAssets[i], IVault(vaults[i]).totalAssets());
            stakes[i] = (slashedAssets[i] >= slashableAssets[i])
                ? 0
                : (
                    Math.mulDiv(
                        Constants.MAX_SLASHING_PERCENT_WAD,
                        (slashableAssets[i] - slashedAssets[i]),
                        IVault(vaults[i]).totalAssets()
                    )
                );
        }
    }

    function compute_initial_assets(address[] memory _vaults) public view returns (uint256[] memory) {
        uint256[] memory initialAssets = new uint256[](_vaults.length);
        for (uint256 i = 0; i < _vaults.length; i++) {
            initialAssets[i] = IVault(_vaults[i]).totalAssets();
        }
        return initialAssets;
    }

    function notDeployedVault(address vault) public view returns (bool response) {
        for (uint256 i = 0; i < vaults.length; i++) {
            if (address(vaults[i]) == vault) return false;
        }
        return true;
    }
}
