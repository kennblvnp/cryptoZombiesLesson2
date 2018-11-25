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
      zFeedingInstance: '',
      defaultAccount: '',
      web3_version: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  authorizeMetaMask() {
    this.web3 = new Web3(Web3.givenProvider);
    console.log(this.web3)

    this.web3.eth.getAccounts().then((accounts) => {
      this.setState({ defaultAccount:accounts[0] });
    })

    this.web3_version = this.web3.version
  }

  deploy(abi, address){
    return new this.web3.eth.Contract(abi,address)
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
      zombieDescription: "A Level 1 Zombie",
    }
    return zombieDetails
  }

  componentWillMount(){

    this.authorizeMetaMask()

    this.zFactoryInstance = this.deploy(ZombieFactoryJSON.abi, "0x6c6d8677803aa9ce5fef3e900edadbde42a7d18a")
    this.zFeedingInstance = this.deploy(ZombieFeedingJSON.abi, "0xf8c971c656bb45c026270f0381dc63310c7d1172")

    console.log(this.zFactoryInstance)
  }

  componentDidMount(){
  }

  handleSubmit(e) {
    // e.preventDefault()

    // const { defaultAccount } = this.state;
    //
    // const data = new FormData(e.target)
    // console.log(defaultAccount)

    // var results = this.zFactoryInstance.methods.createRandomZombie.call(data.get("zombieName")).send(100, defaultAccount);

    // console.log(results)
  }

  render (){
    const { defaultAccount, web3_version } = this.state;

    var font = {
      fontSize: '13px'
    };

    return <div>
        <div className="container">
          <br/><br/>
          <div className="row">
            <div className="col-sm-4">
                <h1>Status:</h1>
                <label>Address login: <span style={font}>{defaultAccount}</span></label><br/>
                <label>web3 version: {this.web3_version}</label><br/>
            </div>
            <div className="col-sm-4">
                <h1>UI:</h1>

                <label>Create zombie</label><br/>


                <form onSubmit={this.handleSubmit}>
                  <input type="text" id="zombieName" name="zombieName" className="form-control" placeholder="Enter zombie name" /> <br/>
                  <button type="submit" className="btn btn-primary">Create Zombie</button>
                </form>

                <br/>

                <button type="button" id="eatKitty" className="btn btn-warning">Eat a kitty</button><br/>

                <div id="display">
                </div>
            </div>
            <div className="col-sm-4">
              <h1>List of Zombies:</h1>
            </div>
          </div>
        </div>
    </div>
  }


}

export default Home;
