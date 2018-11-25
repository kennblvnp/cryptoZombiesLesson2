# Crypto Zombies Lesson 2 with UI  
λ `truffle version`  
Truffle v4.1.14 (core: 4.1.14)  
Solidity v0.4.24 (solc-js)  

λ `truffle migrate --reset`  
λ `cp build/contracts/ZombieFactory.json src/contracts/ZombieFactory.json`  
λ `cp build/contracts/ZombieFeeding.json src/contracts/ZombieFeeding.json`   

Add your new address at `src/components/Home.js`  
`this.zFactoryInstance = this.deploy(ZombieFactoryJSON.abi, "0x6c6d8677803aa9ce5fef3e900edadbde42a7d18a")`  
`this.zFeedingInstance = this.deploy(ZombieFeedingJSON.abi, "0xf8c971c656bb45c026270f0381dc63310c7d1172")`  

Using Reactjs now  
λ `npm install web3@v0.20.6` or `v1.0.0-beta.34`  
λ `npm install`  
λ `npm start`  
