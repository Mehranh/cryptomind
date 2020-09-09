pragma solidity ^0.6.0;

import "./ERC20.sol";

contract CryptomindToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Cryptomind", "CR") {
        _mint(msg.sender, initialSupply);
    }
}