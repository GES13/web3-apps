import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';
import { ProviderSeed } from '@waves/provider-seed';

const seed = "ritual tornado rich autumn sketch creek output hospital question need crazy color pilot hamster note";//libs.crypto.randomSeed(15);
const signer  = new Signer({NODE_URL: 'https://nodes-testnet.wavesnodes.com'});
const provider = new ProviderWeb('https://testnet.waves.exchange/signer/');

signer.setProvider(new ProviderSeed(seed));
//signer.setProvider(provider);


document.querySelector(".js-login").addEventListener("click", async function (event) {
    try {
        const userData = await signer.login();
        event.target.classList.add("clicked");
        event.target.innerHTML = `
            authorized as <br>
            ${userData.address}`;
        document.querySelector(".explorer-link").innerHTML = `<a href="https://wavesexplorer.com/testnet/address/${userData.address}" target="_blank">Check the Explorer</a>`;
    } catch (e) {
        console.error('login rejected')
    }
});


// calling a "faucet" script wavesexplorer.com/tesnet/address/3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn/script
// this will top up the account balance, but only once
/*
document.querySelector(".js-invoke").addEventListener("click", function () {
    signer.invoke({
        dApp: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
        call: {
            function: "faucet"
        }
    }).broadcast().then(console.log)
});
*/


// just putting some data into account storage
/*
document.querySelector(".js-data").addEventListener("click", function () {
    const date = new Date();
    signer.data({
        data: [
            {
                key: "lastCall",
                value: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                type: 'string'
            }
        ]
    }).broadcast().then(console.log)
});
*/

// just transferring some WAVES token to Alice
/*
document.querySelector(".js-transfer").addEventListener("click", function () {
    signer.transfer({
        recipient: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
        amount: 1
    }).broadcast().then(console.log)
});
*/