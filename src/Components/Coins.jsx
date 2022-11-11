import React from 'react'
import CoinItem from './CoinItem'

const Coins = ({coins}) => {
  return (
    <div className='container'>
        <div className="heading">
            <p>No</p> 
            <p className='coin-name'>Coins</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Market</p>
            
        </div>
        {coins.map((coins)=>{
                return <CoinItem coins={coins} key={coins.id} />
            })}
    </div>
  )
}

export default Coins