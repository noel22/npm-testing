// this code will be used to make assertions about our deployed contracts
// will now import some librarys
// assert is library built into node.js runtime
//assert is used for making assertios about tests eg some value is equal to another value
const assert = require('assert');

// now the ganache cli will be  required to be imported
const ganache = require('ganache-cli'); // local etherum test network

//we will now import web 3
const Web3 = require('web3');  // wen we use web 3  we will be calling a constructor function
//used to create instances  so we use capital letter'W'

// assinging the instance  for web 3 we use lower case: and will connect to ganache
// wen using different providers we replace ganache.provider with new provider to connect
const web3 = new Web3(ganache.provider ()); // 'W' = conctructor


//practise tests 1    //.. = working  code !!!
//class which we will attempt to test
//.. class Car{

// it will have 2 methods assigned to it
//.. park() {
  //.. return 'stopped';  // will return string stopped
//..}
//.. drive() {
//..  return 'vroom';
//..}

//..}
// will allow car variableto be used in entire scope
//.. let car;

// we can add the beforeEach statement this will elininate duplicating  code for many statements
//.. beforeEach(() => {
   //.. car = new Car ();

//.. });
// we want to assert that calling park and drive return stoped and vroom
//we make a call with the mocha describe function
// car represents what we are testing has no real value for organisation purposes
//.. describe('Car', () => {       // {} will contain the 'it' statements
//..   it('can park or what ever we want' , () => {   // first arguement is a string
     // we now write test set up  in assertion logic to aessert wen we call park to make sure stopped is returned
     // w ecreate an instance
     // we use assert library to make the call
     // removed .. const car = new Car();
     // will= make sure the two tests are equal if not they will not pass
    //.. assert.equal(car.park(), 'stopped');    //and pass in value we think it should be 'stopped'
// to assert the Car . parked =  'stopped' string
//..   });
  // second 'it' function
  //.. it('can drive' , () => {
    // removed to stop duplication .. const car = new Car ();
  //..   assert.equal(car.drive(),  'vroom')
//..  });

//.. } );




// Real Test 1 .. new code

// going to access web3 and use it to retrieve list of accounts which are created for us by ganache for testing on local network
// we can only deploy contract when we have access to an accounts

// first define beforeEach statements
beforeEach(() => {
  // get a list of all accounts web3 lower case our instance already created
//web3 can work with different types of crypto currency here we use eth
// and accessing get accounts
//every function we call with web3 is async
//which means it will always be returning a promise
  web3.eth.getAccounts() .then (fetchedAccounts =>  {
  // to get access to the accounts we must chain on the following

      console.log(fetchedAccounts);
    });

  //use one of the accounts to depoly contract

  });

  describe('Inbox', () =>  {
    it ('deploys a contract' ,  () => {});

    });
