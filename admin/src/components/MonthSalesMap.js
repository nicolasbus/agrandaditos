import React, {useState,useEffect} from 'react';    
import axios from "axios";
import MonthSales from './MonthSales'
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

const Store=()=>{
    const [monthSales,setMonthSales] = useState([])
    useEffect(() => {
            axios.get("http://localhost:3000/daysummary")
            .catch((err)=>{console.log("err",err)})
            .then(response => {
                setMonthSales(response.data)
            })
    })
    return(
        <Container>
        {monthSales.map((item, index) => <MonthSales item={item} key={index}/>)}
        </Container>
    )}
  
export default Store