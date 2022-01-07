const wvs = 10 ** 8;
const accountBobAddress = "3MvFKVUHr56HAeF755rAT6bUo7HvG9mov8w";
const accountAliceSeed = "move high leaf conduct kite core potato crew question write wise cancel pepper barely cake";
const accountBobSeed = "frown bamboo they just stick history fat unlock medal naive kiwi aunt item ticket champion";
const accountCooperSeed = "faculty mixture tuna parade seminar rude link lounge frost current round era account hockey during";
const accountCooperAddress = "3MrJfsb1qUt9ve1Uqw1UYxU42PRKpk6fPaF";


describe('some suite', () => {

    it('multisig transfer success', async function(){
        let txObjectSignedAlice = transfer({amount: 100000, recipient: accountBobAddress, fee: 500000 }, accountAliceSeed)
        let txObjectSignedAliceBob = transfer(txObjectSignedAlice, accountBobSeed)

        let tx = await broadcast(txObjectSignedAliceBob)
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })

    it('multisig transfer failed', async function(){
        let txObjectSignedAlice = transfer({amount: 100000, recipient: accountCooperAddress, fee: 500000 }, accountAliceSeed)
        let txObjectSignedAliceCooper = transfer(txObjectSignedAlice, accountCooperSeed)

        let tx = await broadcast(txObjectSignedAliceCooper)
        await waitForTx(tx.id)

        console.log(JSON.stringify(tx));
    })    
      
})

