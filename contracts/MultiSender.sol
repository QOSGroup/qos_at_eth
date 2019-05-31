pragma solidity >=0.4.22 <0.6.0;

import "./IERC20.sol";

contract MultiSender {
    address public _owner;
    IERC20 public _token;

    constructor(address initToken) public {
        _owner = msg.sender;
        _token = IERC20(initToken);
    }

    function transferMulti(address[] memory tos, uint[] memory amounts) public returns (bool){
        require(_owner == msg.sender, "Permission denied");
        require((tos.length > 0 && tos.length == amounts.length), 'Invalid length');
        for(uint i = 0; i < tos.length; i++) {
            if(tos[i] == address(0))
                continue;
            require(_token.transfer(tos[i], amounts[i]), "Fail to transfer");
        }
        return true;
    }

    function changeOwner(address newOwner) public {
        require(_owner == msg.sender, "Permission denied");
        _owner = newOwner;
    }

    function changeToken(address newToken) public {
        require(_owner == msg.sender, "Permission denied");
        _token = IERC20(newToken);
    }

    function withdrawToken(address erc20, uint amount) public {
        require(_owner == msg.sender, "Permission denied");
        IERC20 t = IERC20(erc20);
        uint balance = t.balanceOf(this);
        require(balance >= amount, "Insufficient blance");
        require(t.transfer(_owner, amount), "Fail to transfer");
    }
}