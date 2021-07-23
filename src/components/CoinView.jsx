import React, {useEffect, useState} from 'react';
import fetchcoins from '../utils/fetchcoins'
import CoinComponent from './CoinComponent'

const CoinView = () =>{
    const [coins, setCoins] = useState([])
    useEffect(() => {
        const fetchMyCoins = async () => {
            setCoins(await fetchcoins())
        }
        fetchMyCoins()
    },[])

    return(
        <div>
            {Object.keys(coins).map((coin,index) => {
                console.log(coins[coin].usd)
                return <CoinComponent name={coin} usd={coins[coin].usd} nok={coins[coin].nok}/>
            })}
        </div>
    )
}
export default CoinView;