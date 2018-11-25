import React , { Component } from 'react';

class Home extends Component {
  componentWillMount(){
    if(window.web3 !== 'undefined'){
      const currentProvider = window.web3.currentProvider
      const web3 = new Web3(currentProvider)
      this.account = web3.eth.accounts[0]
    }else{
      console.log("not login")
    }
  }

  componentDidMount(){
    // TO DO
  }

  render (){
    return <div>
        <div class="container">
          <br/><br/>
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <label for="exampleInputEmail1">Your zombie</label><br/>
                <input type="text" class="form-control" id="zombie-name" aria-describedby="emailHelp" placeholder="Enter zombie name" /><br/>
                <button type="button" id="create-zombie" class="btn btn-primary">Create Zombie</button>
                <button type="button" id="eatKitty" class="btn btn-warning">Eat a kitty</button><br/>
                <div id="display"></div>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
    </div>
  }

}

export default Home;
