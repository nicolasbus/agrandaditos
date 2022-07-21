import React, {useState,useEffect} from 'react';
import Producto from '../components/Producto';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
  
const Store=()=>{
    const [products,setProducts] = useState([])
    useEffect(() => {
            axios.get("http://localhost:3000/products")
            .catch((err)=>{console.log("err",err)})
            .then(response => {
                setProducts(response.data)
            })
    })
    return(
        <Container>
        {products.map((item) => <Producto item={item} key={item._id}/>)}
        </Container>
    )}
  
export default Store