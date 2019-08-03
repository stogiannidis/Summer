/*
*	The ABI for Task1Contract.
*/
var Task1Contract = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getSecondFromSupervisor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "temperature",
				"type": "uint256"
			},
			{
				"name": "pressure",
				"type": "uint256"
			},
			{
				"name": "humidity",
				"type": "uint256"
			},
			{
				"name": "gas_resistence",
				"type": "uint256"
			},
			{
				"name": "threat",
				"type": "bool"
			}
		],
		"name": "guardCheck",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "getSecondFromGuard",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSecondsFromGuards",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSecondsFromSupervisor",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "temperature",
				"type": "uint256"
			},
			{
				"name": "pressure",
				"type": "uint256"
			},
			{
				"name": "humidity",
				"type": "uint256"
			},
			{
				"name": "gas_resistence",
				"type": "uint256"
			},
			{
				"name": "threat",
				"type": "bool"
			}
		],
		"name": "supervisorCheck",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

module.exports = Task1Contract