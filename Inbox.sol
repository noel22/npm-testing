pragma solidity ^0.4.20;

contract Inbox{
    // as it is public it will automatacally create function which will return 'message'
    //getter  does not change ANYTHING
    string public message; // defines an instance  variable  type string which will be public in the contract

    // function with 1 arguement()
    // constructor which will be called 1 time in the contract
    // envoked automatacially when contract is run as it is same naew as contract
    // will be in the deploy section of contract

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    // this function can be called when contract is deployed as it is not same name as contract

    // setter
    function setMessage(string newMessage) public {
        message = newMessage;
    }
  }

     //this function can be called when contract is deployed as it is not same name as contract
     // getMessage = function name
     // public view = function type
     // returns (string) = returns type
     // function called without arguement()
   // function getMessage() public view returns (string) {
   //     return messag
