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

  generateZombie(id, name, dna) {
    let dnaStr = String(dna)
    while (dnaStr.length < 16)
      dnaStr = "0" + dnaStr

    let zombieDetails = {
      headChoice: dnaStr.substring(0, 2) % 7 + 1,
      eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
      shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
      skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
      eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
      clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
      zombieName: name,
      zombieDescription: "A Level 1 CryptoZombie",
    }
    return zombieDetails
  }

  componentWillMount(){

    this.authorizeMetaMask()
    console.log(this.web3)
    this.zFactoryInstance = this.deploy(ZombieFactoryJSON.abi, "0xb249baaacdb5f3a9370eaffedc50e4a32c627d95")
    this.zFeedingInstance = this.deploy(ZombieFeedingJSON.abi, "0x37c11a3b28342e8cfa94d4a5291e5ffd02c76c3c")

    // Events listener
    this.zFactoryInstance.NewZombie(function(error, result) {
      if (error) return
      var aw = this.generateZombie(result.args.zombieId.c[0], result.args.name, result.args.dna.c[1])
      console.log("new zombie created")
      console.log(aw)
      var myJSON = JSON.stringify(aw)
      console.log(myJSON)
    })
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
