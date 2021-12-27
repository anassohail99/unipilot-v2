//SPDX-License-Identifier: MIT

pragma solidity =0.7.6;

import "./interfaces/IUnipilotFactory.sol";

import "./UnipilotVault.sol";
// import "./UnipilotDeployer.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@openzeppelin/contracts/utils/Create2.sol";

contract UnipilotFactory is IUnipilotFactory {
    address public override owner;
    address public uniswapFactory;

    constructor(address _uniswapFactory, address _governance) {
        owner = _governance;
        uniswapFactory = _uniswapFactory;
    }

    mapping(address => mapping(address => mapping(uint24 => address)))
        public vaults;

    modifier isOwner() {
        require(msg.sender == owner, "NO");
        _;
    }

    //createVault
    function createVault(
        address _tokenA,
        address _tokenB,
        uint24 _fee,
        uint160 _sqrtPriceX96
    ) external override returns (address _vault) {
        require(vaults[_tokenA][_tokenB][_fee] == address(0), "VE");
        address _pool = IUniswapV3Factory(uniswapFactory).createPool(
            _tokenA,
            _tokenB,
            _fee
        );
        IUniswapV3Pool(_pool).initialize(_sqrtPriceX96);
        _vault = deployVault(owner, _pool, "Vault", "VAULT"); //name and symbols will be decided later
        // vaults[_tokenA][_tokenB][_fee] = _vault;
        // vaults[_tokenB][_tokenA][_fee] = _vault;
        emit VaultCreated(_tokenA, _tokenB, _fee);
    }

    function getVaults(
        address _tokenA,
        address _tokenB,
        uint24 _fee
    ) external view override returns (address _vault) {
        _vault = vaults[_tokenA][_tokenB][_fee];
    }

    function setOwner(address _newOwner) external override isOwner {
        emit OwnerChanged(owner, _newOwner);
        owner = _newOwner;
    }

    function deployVault(
        address _governance,
        address _pool,
        string memory _name,
        string memory _symbol
    ) internal returns (address _vault) {
        _vault = address(
            new UnipilotVault{
                salt: keccak256(abi.encode(_governance, _pool, _name, _symbol))
            }()
        );
        // bytes memory bytecode = type(UnipilotVault).creationCode;
        // bytes32 salt = keccak256(abi.encodePacked(_pool));
        // _vault = Create2.deploy(0, salt, bytecode);
    }

    //getVaults

    //setOwner
}
