# Star Notary (Decentralized - Ethereum Testnet)

This Udacity project creates a notary service utilizing a proof of existence smart contract and it is released to the Ethereum Rinkeby test.net

---


## Console Output for Rinkeby Deployment:
```
I unfortunately could not access the Rinkeby network from my work pc, so below is the information of migrating to the development network.
C:\Users\203014767\Documents\Python\javascript\zep>truffle deploy --network rinkeby --reset
Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
Error encountered, bailing. Network state unknown. Review successful transactions manually.
insufficient funds for gas * price + value

C:\Users\203014767\Documents\Python\javascript\zep_final>truffle deploy --network development --reset
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xf0e8ae29ab043df2bb60dac5554d97762830965f8d7a7269a136efa2f71546f6
  Migrations: 0xf315a2b04bc4ce47a61a7cb3bfee67f7b3678a67
Saving successful migration to network...
  ... 0x37d52c404f2ad8b854a0ccbd9e624c5d4f33d966684e8742aae54f39139f4025
Saving artifacts...

```

## Testing in Truffle with Chai Assertions and Mocha Framework

* The working directory should be ./zep_final 
* Create a ./test folder for the starNotary test file
* Run the Ganache test blockchain fro the directory and ensure you are using the port 8545 for testing

```

Requirements: <br>
* node.js
* IDE  - Solidty extension for node
* Truffle - test environment
* Ganache - blockchain for testing
* OpenZeppelin - tested set of tools for Solidity
* Infura
* web3.js

## Preparing Truffle and Ganache

```
Follow steps on:

https://hackernoon.com/ethereum-development-walkthrough-part-2-truffle-ganache-geth-and-mist-8d6320e12269


## Installing Packages 
```
OpenZeppelin
npm init -y 
npm install --save-exact openzeppelin-solidity@2.0.0-rc.1

Ganache CLI
npm install -g ganache-cli

web3.js
npm install web3 --save
```
---

## References / Credits

[Proof of Existence Smart Contract on GitHub by Ramy Hardan]
(https://github.com/ramyhardan/proof-of-existence/blob/master/contracts/ProofOfExistence.sol)

[Hackernoon - Ethereum Development Walkthrough (Part 2: Truffle, Ganache, Geth and Mist)]
(https://hackernoon.com/ethereum-development-walkthrough-part-2-truffle-ganache-geth-and-mist-8d6320e12269)








