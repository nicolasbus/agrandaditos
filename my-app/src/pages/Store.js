import React, {useState,useEffect} from 'react';
import Producto from '../components/Producto';
import styled from "styled-components";
import axios from "axios";


const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
  justify-content: space-between;
display:flex;
align-items:center;
margin:0px;
position:relative;
bottom:240px;
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
        {products.map((item, index) => <Producto item={item} key={index}/>)}
        </Container>
    )}
  
export default Store