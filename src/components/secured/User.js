import web33 from "./web3";
import Web3 from "web3";
import sertifikat from "./sertifikat";   
import React, { Component } from 'react';
// import "./Secured.css";
let HDWalletProvider = require("@truffle/hdwallet-provider"); 
const Provider = require('@truffle/hdwallet-provider');
let mnemonic = "test";
let web3;

// const Test = (props) => {
//   mnemonic = props.mnemonic;
// }   
// mnemonic = Test.mnemonic;

class User extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       name: "TEST",
  //       email: "",
  //       id: "",
  //       pKey: "",
  //       mnemonic: props.mnemonic
  //     }; 
  // }
  // constructor(props){
  //   super(props);
  //   mnemonic = this.props.mnemonic;
  //   const provider = new HDWalletProvider(
  //      mnemonic,
  //     'https://rinkeby.infura.io/v3/bc3edd1b69f14c3790bdf64926c85f79'
  //   );
  //   web3 = new Web3(provider);
  //   this.setState({  mnemonic });
  // }


  state = {
    officer: "",
    sertifikats: [],
    // value: "",
    message: "Please fill the form",
    shm:"",
    pemegang:"",
    mnemonic: "example",
  };  

  async componentDidMount() {
    mnemonic = this.props.mnemonic;
    // const mnemonic =  props.mnemonic;
    const provider = new HDWalletProvider(
       mnemonic,
      'https://rinkeby.infura.io/v3/bc3edd1b69f14c3790bdf64926c85f79'
    );
    web3 = new Web3(provider);    
    
    const accounts = await web3.eth.getAccounts(); 
    const publicAddress = accounts[0];
    const officer = await sertifikat.methods.officer().call();
    const sertifikats = await sertifikat.methods.getSertifikat().call(); 
     
    

    console.log("test",officer);

    this.setState({ officer, sertifikats, mnemonic, publicAddress });
  }


  onSubmit = async (event) => {
    event.preventDefault();

    const privateKey = "13c893040a9c50f9541e1faeb0f657c968f695ad6e8d38fa8b4920bfe780b24c"; //"055dc37b11f44e6e8b548648aa6f4819548184fbd2e6b4e906be21855f26cabb";
    mnemonic = this.props.mnemonic;
    const provider = new Provider(mnemonic, 'https://rinkeby.infura.io/v3/bc3edd1b69f14c3790bdf64926c85f79'); 
    const web3 = new Web3(provider);
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
    const myContract = new web3.eth.Contract(
      abi,
      address,
    );

    const accounts = await web3.eth.getAccounts(); 

    //  alert(accounts[0]);

    this.setState({ message: "Waiting on transaction success..." });

    try{
      const receipt = await myContract.methods.createSertifikat(this.state.shm, this.state.pemegang, accounts[0]).send({ 
        from: accounts[0],
        // gas: "2000000" 
      });

      this.setState({ message: "Certificate have been registered." });
      window.location.reload();
      // console.log(`Transaction hash: ${receipt.transactionHash}`); 
    }catch(e){
      console.log(e);
      this.setState({ message: "Can not register Certificate." });
    }



  };

  onClick = async (event) => {
    event.persist();

    const accounts = await web33.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await sertifikat.methods.verifySertifikat(event.target.id).send({
      from: accounts[0],
    });

    this.setState({ message: "Certificate has been verify " });
    window.location.reload();
  };

  render() {       
   

    return(    
        
        <div  >

        {/* <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Land Registration System</a>
            </div>
          </div>
        </div> */}

        <div className="jumbotron">
          <div className="container">
            <div className="col-xs-12">
              <hr />
              <form className="form-group" onSubmit={this.onSubmit}>
                <h3>{this.state.message}</h3> 
                <div className="textbox">
                  <label className="col-xs-2" >SHM No : </label>
                  <input
                    value={this.state.shm}
                    onChange={(event) => this.setState({ shm: event.target.value })}
                  />
                </div>
                <div className="textbox">
                  <label className="col-xs-2">Name : </label>
                  <input
                    value={this.state.pemegang}
                    onChange={(event) => this.setState({ pemegang: event.target.value })}
                  />
                </div> 
                <div className="textbox">
                  <label className="col-xs-2"></label>         
                  <button  className="col-xs-2">Register</button>
                </div>
              </form>                               
            </div>
          </div>
        </div>        
        <div className="container">
        <div className="">
          <h3 className="">Welcome {this.state.name}</h3>
          <h4>
            This Contract is managed by Officer wallet = {this.state.officer}. <br/><br/>
            There are currently{" "}
          {this.state.sertifikats.length} certificate registered
          <br/><br/>
          Mnemonic = {this.state.mnemonic} 
          <br/><br/>
            Wallet address = {this.state.publicAddress} 
          </h4>

        </div>
      </div>      

      <div className="container thumbs">
          {/* <ul>{listSertifikat}</ul> */}
            {this.state.sertifikats.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                      <img src="https://sarmanpsagala.files.wordpress.com/2016/03/sertipikat-tanah-baru1.jpg" alt="" className="img-responsive"></img>
                      <div className="caption">
                        <h3 className="">{item.shm} </h3>
                        <p>{item.pemegang} </p>
                        <p>{item.recipient} </p>
                        <div className="btn-toolbar text-center">
                          {item.verify === false &&
                            <button id={index} onClick={this.onClick}>Verify</button>
                            }
                            {item.verify === true &&
                              " - Verified - "
                          }                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
              </div>
            ))} 
      </div>        
         
  
      <div className="footer text-center">
          <p>&copy; 2022 GES. All Rights Reserved.</p>
      </div>
  
      </div>    
    );

  }  
}

// const User = (props) => {
//   return (
//     <div className="secured container">
//       <div>{props.phone}</div>
//       <div>{props.email}</div>
//       <div>{props.givenName}</div>
//       <div>{props.familyName}</div>
//       <div>{props.mnemonic}</div>
//     </div>
//   );
// };

export default User;
