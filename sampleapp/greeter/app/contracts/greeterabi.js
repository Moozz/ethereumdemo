
var app = angular.module('greeter');

app.constant('ContractConfig', {
	greeter : 	{
		"address" : "0xfdc7dfe3f11baf1914b16d1ab5b3aa1c45682d1f" ,	//don't forget to update to sync with deploy.txt'
		"abi" :  [ 
			{
				"constant" : false,
				"inputs" : [],
				"name" : "kill",
				"outputs" : [],
				"type" : "function"
			},
			{
				"constant" : true,
				"inputs" : [],
				"name" : "greet",
				"outputs" : [
					{
						"name" : "",
						"type" : "string"
					}
				],
				"type" : "function"
			},
			{
				"inputs" : [
					{
						"name" : "_greeting",
						"type" : "string"
					}
				],
				"type" : "constructor"
			}
	],
	"data" : '606060405260405161032c38038061032c833981016040528080518201919060200150505b5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b8060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a057805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518260005055916020019190600101906100b2565b5b5090506100fc91906100de565b808211156100f857600081815060009055506001016100de565b5090565b50505b5061021e8061010e6000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806341c0e1b514610044578063cfae32171461005357610042565b005b61005160048050506100ce565b005b6100606004805050610162565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156100c05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561015f57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b602060405190810160405280600081526020015060016000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561020f5780601f106101e45761010080835404028352916020019161020f565b820191906000526020600020905b8154815290600101906020018083116101f257829003601f168201915b5050505050905061021b565b9056'
	},
	mortal : {
		"address" : "0xbb141ac3789cc1a766063572a8913c0b61415d60",
		"abi": [{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"type":"constructor"}]
	}
});
