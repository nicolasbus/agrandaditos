import React from 'react'
import DailySales from '../../components/DailySales'
import MonthSales from '../../components/MonthSales'

const Sales = () => {
  return (
    <div>
        <DailySales/>
        <MonthSales/>
    </div>
  )
}

export default Sales