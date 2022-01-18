const wvs = 10 ** 8;
const accountBobAddress = "3MvFKVUHr56HAeF755rAT6bUo7HvG9mov8w";
const accountCooperAddress = "3MrJfsb1qUt9ve1Uqw1UYxU42PRKpk6fPaF";
const accountBobPK = "4Ga2KQmJakg2D7bY1LrHxxuEynx12QEVJiMU59pZ5xWS";
const accountCooperPK = "28HgXAYUDpWqUKGh6afRJk4Q5YCsh53Dgu6JenqVtFJ7";



describe('some suite', () => {

    it('multisig transfer success', async function(){
        let txObjectSignedAlice = transfer({amount: 100000, recipient: accountBobAddress, fee: 500000 })
        let txObjectSignedAliceBob = transfer(txObjectSignedAlice, {privateKey: accountBobPK})

        let tx = await broadcast(txObjectSignedAliceBob)
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })

    it('multisig transfer failed', async function(){
        let txObjectSignedAlice = transfer({amount: 100000, recipient: accountCooperAddress, fee: 500000 })
        let txObjectSignedAliceCooper = transfer(txObjectSignedAlice, {privateKey: accountCooperPK})

        let tx = await broadcast(txObjectSignedAliceCooper)
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })    
      
})

