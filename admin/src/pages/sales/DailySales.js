import React, {useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  // width: 100vw;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white; 

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin:20px;
`;

const DailySales = () => {

    // const handleClick =() =>{ 
    //   const url = "http://localhost:3000/products/add"
    //   const body = 
    //       {
    //         title: title,
    //         brand: brand,
    //         price: price,
    //         color: color.split(','),
    //         size: size.split(','),
    //         categories: categories.split(','),
    //         img: img
    //       }

    //     axios.post(url,body)
    //     .catch((err)=>{console.log("err",err)})
    //     .then(response => { 
    //       if(response.data){
    //         console.log(response.data)
    //       }
    //     })
    //   ;
    // }

      return (


        <Container><Wrapper>
        <Title>Venta</Title>
        <Form>
            <label>Descripcion</label>
            <Input type="text"/>
            <label>Cantidad</label>
            <Input type="number"/>
            <label>Precio Un.</label>
            <Input type="number"/>
            <label>Precio Total</label>
            <Input type="number"/>
            <div>
            <label>Efectivo</label>
            <Input type="checkbox"/>
            <label>Tarjeta</label>
            <Input type="checkbox"/>
            </div>
            <div>
            <Button>Agregar</Button>
            {/* <Button onClick={()=>handleClick()}>Agregar</Button> */}
            <Link to="/producto/inventario"><Button>Cancelar</Button></Link>
            </div>
        </Form>
    </Wrapper></Container>
  
  )
}

export default DailySales