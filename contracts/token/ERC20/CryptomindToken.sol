// SPDX-License-Identifier: MIT
pragma solidity ^0.7.1;

import "./ERC20.sol";

contract CryptomindToken is ERC20 {
     
    constructor()  ERC20("Cryptomind", "CR") {
      
        _setupDecimals(8);
        _mint(msg.sender, 2000000000 * (10 ** 8));
  
    }
}