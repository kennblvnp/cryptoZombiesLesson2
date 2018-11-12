import React , { Component } from 'react';
import Web3  from 'web3';
import ZombieFactoryJSON from '../contracts/ZombieFactory.json';
import ZombieFeedingJSON from '../contracts/ZombieFeeding.json';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      web3: '',
      zFactoryInstance: '',
      zFeedingInstance: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  authorizeMetaMask() {
    if (typeof window.web3 !== 'undefined') {
      var web3 = new Web3(window.web3.currentProvider);
    } else {
      // web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
      throw new Error("You need to login in the metamask");
    }

    web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    // console.log(web3)

    web3.eth.defaultAccount = web3.eth.accounts[0]
    web3.personal.unlockAccount(web3.eth.defaultAccount)

    this.current_login = web3.eth.defaultAccount
    this.web3js_version = web3.version.api

    this.web3 = web3;
  }

  deploy(abi, address){
    var contract = this.web3.eth.contract(abi)
    var instance = contract.at(address)

    return instance;
  }

  componentWillMount(){
    this.authorizeMetaMask()
    console.log(this.web3)
    this.zFactoryInstance = this.deploy(ZombieFactoryJSON.abi, "0x6c6d8677803aa9ce5fef3e900edadbde42a7d18a")
    this.zFeedingInstance = this.deploy(ZombieFeedingJSON.abi, "0xf8c971c656bb45c026270f0381dc63310c7d1172")
  }

  componentDidMount(){
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    
    this.zFactoryInstance.createRandomZombie(data.get("zombieName"))
  }

  render (){
    return <div>
        <div className="container">
          <br/><br/>
          <div className="row">
            <div className="col-sm-4">
                <label>Address login: {this.current_login}</label><br/>
                <label>web3js version: {this.web3js_version}</label><br/>
            </div>
            <div className="col-sm-4">
                <label>Your zombie</label><br/>
                

                <form onSubmit={this.handleSubmit}>
                  <input type="text" id="zombieName" name="zombieName" className="form-control" placeholder="Enter zombie name" /> <br/>
                  <button type="submit" className="btn btn-primary">Create Zombie</button>
                </form>

                <br/>
                
                <button type="button" id="eatKitty" className="btn btn-warning">Eat a kitty</button><br/>
                
                <div id="display"></div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
    </div>
  }


}

export default Home;
