import React, {useState,useEffect} from 'react';    
import axios from "axios";
import Sale from './Sale'
import styled from "styled-components";


const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
  /* justify-content: space-between;
display:flex;
align-items:center;
margin:0px;
position:relative;
bottom:240px; */
display:flex;
`;

const SalesMap=()=>{
    const [sale,setSale] = useState([])
    useEffect(() => {
            axios.get("http://localhost:3000/sales")
            .catch((err)=>{console.log("err",err)})
            .then(response => {
                setSale(response.data)
            })
    })
    return(
        <Container>
        {sale.map((item, index) => <Sale item={item} key={index}/>)}
        </Container>
    )}
  
export default SalesMap