require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture struggle renew sad unique gesture light army gas'; 
let testAccounts = [
"0x8c6cbbe591ddfc402e239bf797d4387e1bd3828e8802c8ac9d93da73543545b7",
"0x743a19b5ffbd085cbcef2a1910a4ba14ec5d92406f754250af16af117e0a4658",
"0xacb787920b3183c8e62e0ec47ff5683bcc556eb1aa12f3ba9b75cba82e89196c",
"0x72f2ff806469e82684913dc37c61058891198380ff528649b89a556835e3ad67",
"0x8c8b97de71fd2c2a1dbd8e48c1ecb7625f18d35041b20e9347c76edbf4d9de20",
"0xb5c7d232e1e7a4eb9da9ba13fb9200797583bf9f80c83a585ee139ed1305c27b",
"0x33ce320f5d5477089cf08335e7f67b66b31ffbbf3e03478a7762a4f4a450a04d",
"0x4435223ab8d59ef6377e2ab4dac3e7b331028d566a0b2082508efaf12625a657",
"0x8034e5eb4fc72c67dfafdc7fb0e6e4ecbed6aa34f4be3c83d4984ce72acf8ffb",
"0x8819e6f429698a39b2afe7b3c1f4c1f9e54fe558b10831194b4a12c7e725c4f3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


