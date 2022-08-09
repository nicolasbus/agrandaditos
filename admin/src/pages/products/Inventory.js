import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Product from '../../components/Product'

const Inventory = () => {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(res =>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const productList = product.map((products,index) => {
        return(
            <div>
                <Product products={products} key={index} />
            </div>
        )
    })
  return (
    <div>
        {productList}
        <div>

              </div>
    </div>
  )
}

export default Inventory