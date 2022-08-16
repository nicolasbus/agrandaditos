import React from 'react'
import Inventory from './products/Inventory'
import DailySales from '../components/DailySales'
const Home = () => {
  return (
    <div>
      <DailySales/>
      <br/> <br/> <br/>
      <Inventory/>
    </div>
  )
}

export default Home