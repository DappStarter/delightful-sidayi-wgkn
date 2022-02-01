require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad inflict enroll blue vibrant'; 
let testAccounts = [
"0xacb81dd476552a68caa1b571d25b8ac6aeecd4a8248dab70f38db51d94a49bb3",
"0xceb6e823d7b1c4bf0cc168d78d3af37965c29476471923bfa7d1b2a9dd3a719a",
"0x9d4ababcbe27a7e95ca03df641a14bad0ee8468ec747a217aa4fc931ad1f8632",
"0x7a37c504b8aa829b3263a66f0be79e1b422330df38f28da8ad5968208f210e99",
"0x4c3d90e2d0d76424b021b621520f39b4deb34bdbade7fed8d0a286d64584761a",
"0xc3689aca1a7e6cefee0042140c369a6cd3418328f149c326c04420d68122e6f8",
"0xd99eb9122d736cec3b4e459de8d232768907e2f3f1f8f29174530ac0f1e87594",
"0xdd5c67e14008e46f40b484da8af06fbb6c3cb7da6125348aeae0039a4bf4df82",
"0xdf29370d9c89a796b2c5f5b65c96d1ed025018d7aadaaab816d358936b87c8da",
"0x6fd8420ea381815ccf181aadc9b2bf67dab368ef6d1d3a6ca062282968386ced"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

