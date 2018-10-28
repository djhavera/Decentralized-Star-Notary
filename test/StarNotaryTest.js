const StarNotary = artifacts.require('StarNotary')
const crypto = require("crypto");
const should = require('should');
const sinon = require('sinon');
require('truffle-test-utils').init();
var EventEmitter = require('events').EventEmitter;

function sha256AsHexString(doc) {
    return "0x" + crypto.createHash("sha256").update(doc, "utf8").digest("hex");
}
contract('StarNotary', accounts => { 

    let name = "awesome star!"
    let starCoordinators = "Star power 103!";
    let starStory = "I love my wonderful star";
    let dec = "dec_121.874";
    let mag = "mag_245.978";
    let cent = "ra_032.155";


    beforeEach(async function() { 
        this.contract = await StarNotary.new({from: accounts[0]})
    })
/*
    describe('Contract can Hash', function(){
        let starId = 1;
        const doc1 = "awesome star!"
        const docHash1 = sha256AsHexString(doc1);
        it('Lets check the Event Document Hash Value', async (done) => { 
            const poe = await StarNotary.deployed();
            let result = await poe.notarizeHash(starId, docHash1).then((result) => {
                assert.equal(result, {
                    logs: [{
                    args: {
                        "documentHash": docHash1 
                    }}]
                }, 'Error when checking the Event Emit');
                })
            })    
        }) 
    */        
    describe('can create a star', () => { 
        const doc1 = "awesome star!"
          it('can create a star and get its name', async function () { 
            await this.contract.createStar('awesome star!','','','','','',1, {from: accounts[0]})
            let res = (await this.contract.tokenIdToStarInfo(1))[0]
            assert.equal(res, 'awesome star!')
                console.log('The star name is ' + res)
        })

        it('can add meta data', async function () {         
            await this.contract.createStar(name, starCoordinators, starStory, dec, mag, cent,1, {from: accounts[0]})
            let res2 = (await this.contract.tokenIdToStarInfo(1))
            assert.deepEqual(res2, ['awesome star!', "Star power 103!", "I love my wonderful star", "dec_121.874", "mag_245.978","ra_032.155"])
                console.log('The star meta data contains ' + res2)
        })
    })
    //https://github.com/ramyhardan/proof-of-existence/blob/master/test/ProofOfExistence.spec.js
    describe('Star is Unique', () => {     
        let starId = 1;
        const doc1 = "awesome star!"
        const docHash1 = sha256AsHexString(doc1);
        it('Lets check that the star exists already and is not unique', async () => { 
            const poe = await StarNotary.deployed();
            await poe.notarizeHash(starId, docHash1);
            const valid = await poe.checkIfStarExist(starId, docHash1);
            assert.equal(valid, true);
            //console.log('' + res)
            })    
        })   
    describe('buying and selling stars', () => { 
        let user1 = accounts[1]
        let user2 = accounts[2]
        let randomMaliciousUser = accounts[3]
        
        let starId = 1
        let starPrice = web3.toWei(.01, "ether")
        beforeEach(async function () { 
            await this.contract.createStar('awesome star!','','','','','', starId, {from: user1})    
        })

        it('user1 can put up their star for sale', async function () { 
            let usera = (await this.contract.ownerOf(starId))
            assert.equal(usera, user1)
                console.log('User from OwnerOf Function: ' + usera)
                console.log('User from Test: ' + user1)
            await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
            let starPriceA = await this.contract.starsForSale(starId)
            assert.equal(starPriceA , starPrice)
                console.log('Star Price from putStarUpForSale: ' + starPriceA )
                console.log('Star Price from Test: ' + starPrice)
        })
        describe('user2 can buy a star that was put up for sale', () => { 
            beforeEach(async function () { 
                await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
            })
            it('user2 is the owner of the star after they buy it', async function() { 
                await this.contract.buyStar(starId, {from: user2, value: starPrice, gasPrice: 0})
                assert.equal(await this.contract.ownerOf(starId), user2)
            })
            it('user2 ether balance changed correctly', async function () { 
                let overpaidAmount = web3.toWei(.05, 'ether')
                const balanceBeforeTransaction = web3.eth.getBalance(user2)
                await this.contract.buyStar(starId, {from: user2, value: overpaidAmount, gasPrice: 0})
                const balanceAfterTransaction = web3.eth.getBalance(user2)
                assert.equal(balanceBeforeTransaction.sub(balanceAfterTransaction), starPrice)
            })
        })  

    })

})
