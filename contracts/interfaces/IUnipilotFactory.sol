//SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

/// @title The interface for the Unipilot Factory
interface IUnipilotFactory {
    /// @notice Emitted when a vault is created
    /// @param _tokenA The first token of the pool by address sort order
    /// @param _tokenB The second token of the pool by address sort order
    /// @param _fee The fee tier for which the vault is created
    /// @param _vault The address of the vault that is created
    event VaultCreated(
        address indexed _tokenA,
        address indexed _tokenB,
        uint24 _fee,
        address indexed _vault
    );

    /// @notice Emitted when the governance of the factory is changed
    /// @param _oldGovernance The governance before the governance was changed
    /// @param _newGovernance The governance after the governance was changed
    event GovernanceChanged(
        address indexed _oldGovernance,
        address indexed _newGovernance
    );

    /// @notice Creates a vault for the given two tokens and fee
    /// @param _tokenA The first token of the pool by address sort order
    /// @param _tokenB The second token of the pool by address sort order
    /// @param _fee The desired fee for the unipilot vault
    /// @dev tokenA and tokenB may be passed in either order: token0/token1 or token1/token0.
    /// The call will revert if the vault already exists, the fee is invalid, or the token arguments
    /// are invalid.
    /// @return _vault The address of the newly created pool
    function createVault(
        address _tokenA,
        address _tokenB,
        uint24 _fee,
        uint160 _sqrtPriceX96
    ) external returns (address _vault);

    /// @notice Used to check whether the pool is active or passive
    /// @param vault address of any vault
    /// @return _whitelisted A bool to show whether the pool is active: true or passive: false
    function whitelistedVaults(address vault)
        external
        view
        returns (bool _whitelisted);

    /// @notice Used to give addresses of governance, strategy, indexFund
    /// @return governance address, strategy address, indexFund address
    function getUnipilotDetails()
        external
        view
        returns (
            address,
            address,
            address
        );
}
