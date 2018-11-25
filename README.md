
# Crypto Zombies Lesson 2 with UI  

# Tools
  Windows 10 x64  <img width="12px" src="https://www.clipartmax.com/png/middle/15-158853_download-windows-10-logo-vector.png" alt="alt text" title="Logo Title Text 1"> / Mac macOS Mojave v10.14 <img width="14px" src="https://km.support.apple.com/kb/securedImage.jsp?productid=PP91&size=240x240" alt="alt text" title="Logo Title Text 1">
  Ganache v1.2.2  <img width="12px" src="https://truffleframework.com/img/ganache-logomark.svg" alt="alt text" title="Logo Title Text 1">  
  Reactjs v16.6.1  <img width="18px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="alt text" title="Logo Title Text 1">
  λ `truffle version`  <img width="12px" src="https://truffleframework.com/img/truffle-logomark.svg" alt="alt text" title="Logo Title Text 1">
  <blockquote>
    Truffle v4.1.14 (core: 4.1.14)<br>
    Solidity v0.4.24 (solc-js)
  </blockquote>
  λ `node -v && npm -v` <img width="20px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="alt text" title="Logo Title Text 1">
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
