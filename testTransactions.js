console.log("Let's test the transactions.")
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')

const provider = new HDWalletProvider( 
	'lyrics coach speed donkey race where appear churn broom illegal must volume',
    'https://rinkeby.infura.io/v3/07b06e4e587148a68c9cc836f97efb4f' )
const web3 = new Web3(provider)

console.log("- Web3 is set successfully.")

const task1ContractAbi = require( "./smart-contracts/task1.js" )
const task1ContractAddress = "0xa62ee4593f736f1ce10e5aa95a58b788f9fe70db"
 
const task1Contract = new web3.eth.Contract( task1ContractAbi , task1ContractAddress )
// console.log(task1Contract)

task1Contract.methods.guardCheck(46461212, 22, 30, 456, 789, false).send({from:"0x2edb1ddb957ea71121017Bedca3332F5Bbf29fB9", gas:3000000, gasPrice:25000000000}).
	then(receipt => console.log("Transaction receipt: ", receipt)).catch(err => console.error(err));

// console.log(task1Contract.methods)

console.log("- Let's check if the transaction is sent. ");			