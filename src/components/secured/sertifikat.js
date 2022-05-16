import web3 from './web3';

// const address = '0x71A85f1DCbEfed3C6DC20457D26d79aaF9A1F69e';
const address = '0xbAb3d3a64F93918A4224D1Cec88718f618b6E28A';
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shm",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pemegang",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "createSertifikat",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "verifySertifikat",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSertifikat",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "shm",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pemegang",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "verify",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"internalType": "struct LandManagement.Sertifikat[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "officer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sertifikats",
		"outputs": [
			{
				"internalType": "string",
				"name": "shm",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pemegang",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "verify",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);
