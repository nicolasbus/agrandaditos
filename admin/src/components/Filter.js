import React,{useState} from 'react'
import axios from 'axios';
import Product from './Product'

const Filter = () => {
    const [texto,setTexto] = useState("")
    const [product,setProduct] = useState([])



   
    const getfiltro = async () =>{
        const res = await axios.get("http://localhost:3000/products?size="+{texto})
        setProduct(res.data)
        console.log(setProduct)
    }



    const productList = product.map((products,index) => {
        return(
            <div>
                <Product products={products} key={index} />
            </div>
        )
    })
console.log(texto)
  return (
    <div>
        <input
        type="number"
        value={texto}
        onChange={(e)=>setTexto(e.target.value)}
        onKeyUp={getfiltro}
        />
        {/* <button onClick={()=>handleClick()}>Buscar</button> */}
<p>{setProduct}</p>
    </div>
  )
}

export default Filter