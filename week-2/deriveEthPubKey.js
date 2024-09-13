"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
const ethers_1 = require("ethers");
// Generate new mnemonic
const mnemonic = (0, bip39_1.generateMnemonic)();
console.log(mnemonic);
// Get root seed
const seed = (0, bip39_1.mnemonicToSeedSync)(mnemonic);
const hdNode = ethers_1.HDNodeWallet.fromSeed(seed);
for (let i = 0; i < 5; i++) {
    const derivationPath = `m/44'/60'/0'/0/${i}`;
    const childNode = hdNode.derivePath(derivationPath);
    const publicKey = childNode.publicKey;
    const ethreumWalletAddress = new ethers_1.Wallet(childNode.privateKey);
    console.log(`publicKey: ${publicKey}`);
    console.log(ethreumWalletAddress);
}
