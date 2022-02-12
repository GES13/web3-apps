const starkPk = '4Ga2KQmJakg2D7bY1LrHxxuEynx12QEVJiMU59pZ5xWS';
const starkAddr = '3MvFKVUHr56HAeF755rAT6bUo7HvG9mov8w';

const dAppAddr = '3MrYWska69mBDNu1nvYheioeVLHaoSk998q';
const dAppPk = 'HAFwDMx7UCEFkAA2GE4WVo7v5mrkxeHZDfxVVpPPiz5V';



describe('Coupon Test Case', () => {
    it('Buy Coupon Alpha', async () => {
        let key1 = "status:purchase_item_A_customer_" + starkAddr
        let key2 = "price:purchase_item_A_customer_" + starkAddr

        let payment = [{
            amount: 10000000, assetId: null
        }]

        let invokePeter = invokeScript({
            dApp: dAppAddr,
            call: {
            function: "purchase",
            args: [
                {
                    "type": "string",
                    "value": "A"
                }
            ]
        },
            payment: payment
        }, {privateKey: starkPk})

        await expect(broadcast(invokePeter)).fulfilled
        let key1_val = await accountDataByKey(key1, dAppAddr)
        let key2_val = await accountDataByKey(key2, dAppAddr)
        

        expect(key1_val.value).equals("confirmed");
        expect(key2_val.value).equals(234000000);
        })

    it("Buy Coupon BETA high price", async() => {

        let payment = [{
            amount: 43100000, assetId: null
        }]

        let invokeStark = invokeScript({
            dApp: dAppAddr,
            call: {
            function: "purchase",
            args: [
                {
                    "type": "string",
                    "value": "B"
                }
            ]
        },
            payment: payment
        }, {privateKey: starkPk})

        await expect(broadcast(invokeStark)).rejectedWith("payment cant be higher than price")
    })

    it("Test no name", async () => {
        let payment = [{
            amount: 28100000, assetId: null
        }]

        let invokeStark = invokeScript({
            dApp: dAppAddr,
            call: {
            function: "purchase",
            args: []
        },
            payment: payment
        }, {privateKey: starkPk})

        await expect(broadcast(invokeStark)).rejectedWith("Unsuccessful purchase as item name was not given")
    })



    it("Test authorization", async() => {
        let invokeSetPrice = invokeScript({
            dApp: dAppAddr,
            call: {
                function: "setPrices",
                args: []
            }
        }, {privateKey: starkPk});

        await expect(broadcast(invokeSetPrice)).rejectedWith("Only owner can set prices")
    })
})

async function clearDataStorage(addr, key) {
    broadcast(invokeScript({
        dApp: addr,
        fee: 900000,
        call: {
            function: "deleteEntry",
            args: [
                    {
                       "type": "string",
                       "value": key
                    }
                ]
            }
        }, {privateKey: dAppPk}))
}