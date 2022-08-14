import React,{useState} from 'react'
import styled from "styled-components";
import axios from "axios";
import MonthSalesMap from "./MonthSalesMap"

const Container = styled.div`
display:flex;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 0px 10px;
  background-color: white; 

`;
const PaymentMethod = styled.div`
margin:10px;
display:flex;
`;
const Label = styled.label`
margin:0px;
`;
const Date = styled.div`
margin:25px`;
const Info = styled.div`
flex:1;
margin:12px;
`;

const Input = styled.input`
  /* flex: 1; */
  /* min-width: 40%; */
  margin: 0px 20px;
  padding: 0px 8px; 
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
const DaySummary = () => {
    const [date, setDate] = useState('');
    // const [total, setTotal] = useState('');
    const [cashRegister, setCashRegister] = useState('');
    const [description, setDescription] = useState('');
    const [cash, setCash] = useState('');
    const [card, setCard] = useState('');
    const [transfer, setTransfer] = useState('');
    const total = 
    parseInt(cash) + parseInt(card) + parseInt(transfer) 
    || parseInt(cash) + parseInt(card) 
    || parseInt(cash) + parseInt(transfer)
    || parseInt(transfer) + parseInt(card)
    || parseInt(card)
    || parseInt(cash)
    || parseInt(transfer)
const body1 =
    {
      date: date,
    //   cash: cash,                                   
    //   card: card,
    //   transfer: transfer,
    payment: [cash,card,transfer],
      total: total,
      cashRegister: cashRegister,
      description: description,

    }
    console.log(body1)
    const handleClick =() =>{ 
        const url = "http://localhost:3000/daysummary/add"
        const body = 
            {
                date: date,
                cash: cash,
                card: card,
                transfer: transfer,
                total: total,
                cashRegister: cashRegister,
                description: description,
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
    <Container>           
      <Wrapper>
         <h2>Cierre del dia</h2>

         <form>
          <Date>
    <Label>Fecha</Label>
    <Input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/><br/>
    </Date>
    <PaymentMethod>
    <Label>Efectivo</Label>
    <Input type="number"  value={cash} onChange={(e)=>{setCash(e.target.value)}}/>
    
    <Label>Tarjeta</Label>
    <Input type="number"  value={card} onChange={(e)=>{setCard(e.target.value)}}/>
    
    <Label>Transferencia</Label>
    <Input type="number"  value={transfer} onChange={(e)=>{setTransfer(e.target.value)}}/>
    </PaymentMethod>
    <Info>
    <Label>Total</Label>
    <Input type="number" value={total} /><br/>
    
    <Label>Caja chica</Label>
    <Input type="number" value={cashRegister} onChange={(e)=>{setCashRegister(e.target.value)}}/><br/>
   
    <Label>Novedades</Label>
    <Input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>
    </Info>
    <Button onClick={()=>handleClick()}>Cierre</Button>
    </form>
    </Wrapper>

  
</Container>
  )
}

export default DaySummary