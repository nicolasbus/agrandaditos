import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Product = ({products}) => {

  const deleteProduct=(_id)=>{
    axios.delete(`http://localhost:3000/products/${_id}`)
    .then(res=>{
      console.log(res.data)
      window.location.reload(true);
  })
  .catch(err=>{
    console.log(err)
  })}
  return (
    <div>
        <ul>
            <li>{products.title}</li>
            <li>${products.price}</li>
            <img src={products.img} width="300px"/>
            <div>{products.size?.map(
              (s,index) => (<p key={index}>{s}</p>))}
            </div>
            <Link to={`/producto/editar/${products._id}`}><button>Editar</button></Link>
            <button onClick={()=>{deleteProduct(products._id)}}>Eliminar</button>
        </ul>
    </div>
  )
}


export default Product



