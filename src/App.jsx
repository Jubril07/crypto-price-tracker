import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Coins from './Components/coins'
import Navbar from './Components/Navbar'


function App() {
const [coins, setCoins] = useState([])
const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
useEffect(()=>{
  axios.get(url).then((response)=>{
    setCoins(response.data)    
  }).catch((err)=>{
    console.log(err)
  })
},[])
  return (
    <div className="App">
      <Navbar/>
      <Coins coins={coins}/>
    </div>
  )
}

export default App
