import axios from 'axios'
const buyPrice =
{
        "chainlink": {
            "buy": 135.91
        },
        "polkadot": {
            "buy": 110.66
        },
        "stellar": {
            "buy": 2.22
        },
        "hedera-hashgraph": {
            "buy": 1.48
        },
        "monero": {
            "buy": 1733.58
        },
        "pancakeswap-token": {
            "buy": 113.04
        },
        "tether": {
            "buy": 8.88
        },
        "binancecoin": {
            "buy": 2508.47
        },
        "dogecoin": {
            "buy": 1.65
        },
        "cardano": {
            "buy": 10.2
        },
        "bitcoin": {
            "buy": 284944
        },
        "nucypher": {
            "buy": 1.66
        },
        "smooth-love-potion": {
            "buy": 2.39
        },
        "compound-governance-token": {
            "buy": 3451.92
        },
        "ripple": {
            "buy": 5.14
        },
        "uniswap": {
            "buy": 151.09
        },
        "ethereum": {
            "buy": 17808.87
        },
        "reserve-rights-token": {
            "buy": 0.186197
        },
        "litecoin": {
            "buy": 1042.67
        },
        "the-graph": {
            "buy": 4.62
        },
        "usd-coin": {
            "buy": 8.87
        },
        "bingus-token": {
            "buy": 2.22e-06
        },
        "the-sandbox": {
            "buy": 5.13
        },
        "idena": {
            "buy": 0.851094
        },
        "numeraire": {
            "buy": 272.26
        },
        "kleros": {
            "buy": 1.17
        },
        "band-protocol": {
            "buy": 43.98
        },
        "the-chad-token": {
            "buy": 1.736e-09
        },
        "ghost-by-mcafee": {
            "buy": 4.34
        },
        "celo": {
            "buy": 20.51
        },
        "maker": {
            "buy": 21403
        },
        "dai": {
            "buy": 8.88
        }
    }

const fetchcoins = async () => {
    return await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Ckleros%2Cchainlink%2Ccardano%2Cpolkadot%2Chedera-hashgraph%2Cuniswap%2Cmonero%2Creserve-rights-token%2Cidena%2Cbinancecoin%2Cpancakeswap-token%2Csmooth-love-potion%2Cthe-sandbox%2Cripple%2Cthe-graph%2Cmaker%2Ccompound-governance-token%2Cstellar%2Ccelo%2Cnumeraire%2Cband-protocol%2Cnucypher%2Cusd-coin%2Ctether%2Cdai%2Cbingus-token%2Cthe-chad-token%2Cghost-by-mcafee%2Cdogecoin&vs_currencies=usd%2Cnok")
    .then((response) => {
        if(response.status === 200) {
            return response.data
        }else{
            return {}
        }
    })
}
const mapBuyPrice = () => {
    
}
export default fetchcoins;