import React from 'react'
import DaySummary from '../components/DaySummary'
import SalesMap from '../components/SalesMap'
const Home = () => {
  return (
    <div>
      {/* <Inventory/> */}
      <SalesMap/>
      <DaySummary/>

    </div>
  )
}

export default Home