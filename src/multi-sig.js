const wvs = 10 ** 8;
const accountBobAddress = "3MvFKVUHr56HAeF755rAT6bUo7HvG9mov8w";
const accountStarkAddress = "3MrJfsb1qUt9ve1Uqw1UYxU42PRKpk6fPaF";
const accountBobPK = "4Ga2KQmJakg2D7bY1LrHxxuEynx12QEVJiMU59pZ5xWS";
const accountSomebodykPK = "7X1UipBUQ7x7HwsHDzFU3SFD39X9f7Euqk68tc4DY9M9";



describe('some suite', () => {

    it('multisig transfer success', async function(){
        let txObjectSignedAlice = transfer({amount: 1 * wvs, recipient: accountBobAddress, fee: 500000 })
        let txObjectSignedAliceBob = transfer(txObjectSignedAlice, {privateKey: accountBobPK})

        let tx = await broadcast(txObjectSignedAliceBob)
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })

    it('multisig transfer failed', async function(){
        let txObjectSignedAlice = transfer({amount: 1 * wvs , recipient: accountStarkAddress, fee: 500000 })
        let txObjectSignedAliceCooper = transfer(txObjectSignedAlice, {privateKey: accountSomebodykPK})

        let tx = await broadcast(txObjectSignedAliceCooper)
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })    
      
})

