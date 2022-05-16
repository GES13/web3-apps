import Web3 from "web3";

let HDWalletProvider = require("@truffle/hdwallet-provider"); 

let web33;


// window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');     
      // web3 =  window.ethereum.request({ method: "eth_requestAccounts" }); 
      web33 = new Web3(window.web3.currentProvider);
      alert("MetaMask is installed!");
    }else{
    //   alert("Please install metamask to continue...");
      const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/bc3edd1b69f14c3790bdf64926c85f79'
      );
    //   const provider = new HDWalletProvider(
    //     '',
    //     'https://rinkeby.infura.io/v3/bc3edd1b69f14c3790bdf64926c85f79'
    //   );
      web33 = new Web3(provider);
       
    }
  // })  

// const web3 = new Web3(window.ethereum);  

export default web33;