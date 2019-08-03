console.log("Let's test the transactions.")
// const HDWalletProvider = require('truffle-hdwallet-provider')
var WalletProvider = require("truffle-wallet-provider");
const Web3 = require('web3')
// Read and unlock keystore
var keystore = '{"address":"9f3fae30a8c0907a83aa15f4f32688c9c9b0b707","crypto":{"cipher":"aes-128-ctr","ciphertext":"f270483da2a7944c9642099b96f6a4086db574a5836e5b478d6880e3c35d5909","cipherparams":{"iv":"17f945bc50e129f6ddbcddfecbcbe870"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"2f0419e0ab3775cd31872a5cffb6c6b32ed5eef8f622d7ed64d950f02815bd86"},"mac":"4f648f805e84a7f07d37ac188e8f64de3630fa26f651e4a0a7706a253bdced4c"},"id":"ac55f51b-bef4-4096-95ac-6dd198009cb7","version":3}'
var pass = "t6phost4m4*";
var wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
var provider = new WalletProvider(wallet, "https://rinkeby.infura.io/v3/07b06e4e587148a68c9cc836f97efb4f")
const web3 = new Web3(provider)
console.log("- Web3 is set successfully.")
const task1ContractAbi = require( "./smart-contracts/task1.js" )
const task1ContractAddress = "0xa62ee4593f736f1ce10e5aa95a58b788f9fe70db"
const task1Contract = new web3.eth.Contract( task1ContractAbi , task1ContractAddress )
task1Contract.methods.guardCheck(46461212, 22, 30, 456, 789, false).send({from:"0x9f3fae30a8c0907a83aa15f4f32688c9c9b0b707", gas:3000000, gasPrice:25000000000}).
    then(receipt => console.log("Transaction receipt: ", receipt)).catch(err => console.error(err));
console.log("- Let's check if the transaction is sent. ");
