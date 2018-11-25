
# Crypto Zombies Lesson 2 with UI  

# Tools
  Windows 10 x64  <img width="12px" src="https://www.clipartmax.com/png/middle/15-158853_download-windows-10-logo-vector.png" alt="Windows 10" title="Windows 10"> / Mac macOS Mojave v10.14 <img width="14px" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PP91&size=240x240" alt="Mac" title="Mac">  
  Ganache v1.2.2  <img width="12px" src="https://truffleframework.com/img/ganache-logomark.svg" alt="Ganache" title="Ganache">  
  Reactjs v16.6.1  <img width="18px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png" alt="Reactjs" title="Reactjs">  
  λ `truffle version`  <img width="12px" src="https://truffleframework.com/img/truffle-logomark.svg" alt="Truffle Framework" title="Truffle Framework">
  <blockquote>
    Truffle v4.1.14 (core: 4.1.14)<br>
    Solidity v0.4.24 (solc-js)
  </blockquote>
  λ `node -v && npm -v` <img width="20px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Nodejs" title="Nodejs">
  <blockquote>
    v10.13.0<br>
    6.4.1
  </blockquote>

# Setup
  λ `npm install`  
  λ `truffle migrate --reset`  
  λ `cp build/contracts/ZombieFactory.json src/contracts/ZombieFactory.json`  
  λ `cp build/contracts/ZombieFeeding.json src/contracts/ZombieFeeding.json`    

  Add your new address at `src/components/Home.js`  
  `this.zFactoryInstance = this.deploy(ZombieFactoryJSON.abi, "0x6c6d8677803aa9ce5fef3e900edadbde42a7d18a")`  
  `this.zFeedingInstance = this.deploy(ZombieFeedingJSON.abi, "0xf8c971c656bb45c026270f0381dc63310c7d1172")`  

# Start
  λ `npm start`  
