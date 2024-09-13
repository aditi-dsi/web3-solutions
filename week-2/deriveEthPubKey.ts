import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { HDNodeWallet, Wallet } from "ethers";

// Generate new mnemonic
const mnemonic = generateMnemonic();
console.log(mnemonic);

// Get root seed
const seed = mnemonicToSeedSync(mnemonic);
const hdNode = HDNodeWallet.fromSeed(seed);


for(let i=0; i<5; i++){
    const derivationPath = `m/44'/60'/0'/0/${i}`;
    const childNode = hdNode.derivePath(derivationPath);
    const publicKey = childNode.publicKey;
    const ethreumWalletAddress = new Wallet(childNode.privateKey);
    console.log(`publicKey: ${publicKey}`); //Public key address
    console.log(ethreumWalletAddress); //Wallet address based on Public key
}