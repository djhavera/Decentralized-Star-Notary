# Star Notary (Decentralized - Ethereum Testnet)

This Udacity project creates a notary service utilizing a proof of existence smart contract and it is released to the Ethereum Rinkeby test.net

---


## Console Output for Rinkeby Deployment:
```
$ truffle deploy --network rinkeby --reset
Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x49f2aeba4e12d3e919b940975d589db079b0dadc40ac3cb50e969d20a26cf300
  Migrations: 0x122934e8520db7b1d738abf63ede6286383a3a50
Saving successful migration to network...
  ... 0x03c783f87888fa85cdd55a6a81decab4864248e104048ed55ea91c8780457672
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing StarNotary...
  ... 0x3ec2fd3937ea6345695c43d53401ee2337ef65d8862d6930ff6ac0b2f6ea940c
  StarNotary: 0xe50abf4571908e2b7df62622c3c5213d8564aba0
Saving successful migration to network...
  ... 0x8c75600a6f5ac78dd48482153718d5745b8e9d23f7461e158a268db05b747c0f
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








