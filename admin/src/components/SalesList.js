import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

const SaleList = () => {
  //setear los hooks useState
  const [ sales, setSales ] = useState([])
  const [ search, setSearch ] = useState("")


  const searcher = (e) =>{
    setSearch(e.target.value)
    
} 
useEffect(()=>{
    axios.get('http://localhost:3000/sales')
    .then(res =>{
        console.log(res.data)
        setSales(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[])

   //metodo de filtrado 2   
   const results = !search ? sales : sales.filter((dato)=> dato.date.toLowerCase().includes(search.toLocaleLowerCase()))
 
  //renderizamos la vista
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Ingresar el dia' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Fecha</th>
                    <th>Venta</th>
                    <th>Caja</th>
                    <th>Medio de pago</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (sale) => (
                    <tr key={sale._id}>
                        <td>{sale.date}</td>
                        <td>{sale.total}</td>
                        <td>{sale.cashRegister}</td>
                        <td>{sale.paymentMethod}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SaleList