/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'ball ivory trim shine glow unfold give jump foot action exclude enroll';
//ganache-cli -m 'ball ivory trim shine glow unfold give jump foot action exclude enroll'
//0x4073c7887f2386e51fd73be91c5cb5d66c09ba28
//0x97e94f32d58ce70f3f310d8087ccaa5a4f9644c8f3fe6e58c711d2f93105a0db
//https://rinkeby.etherscan.io/address/0x4073c7887f2386e51fd73be91c5cb5d66c09ba28
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
rinkeby: {
  provider: function() { 
    return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/03d89c950ad34f32a21cb687dda35c60') 
  },
  network_id: 4,
  gas: 4500000,
  gasPrice: 10000000000,
}
}
};
