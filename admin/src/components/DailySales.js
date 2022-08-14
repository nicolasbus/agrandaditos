
import React, {useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 0px 10px;
  background-color: white; 

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
`;
const Date = styled.div`
margin:10px
`;

const SalesDiv = styled.div`
padding:0px 10px 0px;
margin:0px;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 0px 25px;
  padding: 8px;
`;
const InputC = styled.input`
  margin: 0px 34px;
  padding: 8px;
`;
const Adiv = styled.div`
display:flex;
`;

const Button = styled.button`
  width:130px;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin:20px;
`;
const DivP = styled.div`
display:flex;
`;
const TextArea = styled.div`
display:flex;
padding:5px;
`;
const InputBox = styled.input`
width:300px;
height:100px;
`;

const DailySales = () => {
    const [date, setDate] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [saleInput, setSaleInput] = useState('');
    const [cash, setCash] = useState('')
    const [card, setCard] = useState('')
    const [transfer, setTransfer] = useState('')


  const payment = [cash,card,transfer]


    const handleClick =() =>{ 

      const url = "http://localhost:3000/sales/add"
      const body = 
          {
            date: date,
            sale: saleInput,
            paymentMethod: payment,
            description: descriptionInput,

          }

        axios.post(url,body)
        .catch((err)=>{console.log("err",err)})
        .then(response => { 
          if(response.data){
            console.log(response.data)
          }
          
        })
      ;

    }

      return (


        <Container><Wrapper>
        <Title>Ventas</Title>
        <Form>
          <Date>
            <label>Fecha</label>
            <Input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
          </Date>
          <SalesDiv>
            <label>Venta    </label>
            <Input type="number" value={saleInput} onChange={(e)=>{setSaleInput(e.target.value)}}/>
            </SalesDiv>
            <h4>Medio de pago</h4>
            <DivP>
             <label>Efectivo</label>
             <InputC type='checkbox' value="Efectivo" onChange={(e) => setCash(e.target.value)}/><br/>
             <label>Tarjeta</label>
             <InputC type='checkbox' value="Tarjeta" onChange={(e) => setCard(e.target.value)}/><br/>
             <label>Transferencia</label>
             <InputC type='checkbox' value="Transferencia" onChange={(e) => setTransfer(e.target.value)}/>
             </DivP><br/>
             <label>Observaciones</label>
              <TextArea>
             <InputBox type="text" value={descriptionInput} onChange={(e)=>{setDescriptionInput(e.target.value)}}/>
             </TextArea>


             <Adiv>
             <Button onClick={()=>handleClick()}>Agregar</Button>
             <Link to="/cierre"><Button>Hacer cierre</Button></Link>
             </Adiv>
                </Form>
    </Wrapper></Container>
  
  )
}

export default DailySales