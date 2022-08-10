import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Product from '../../components/Product'
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background-image: url("https://i.ibb.co/tb6c9kY/agrandaditos-Back.png");
`;
    

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
    <Container>
        {productList}

    </Container>
  )
}

export default Inventory