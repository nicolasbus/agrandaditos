import React,{useState} from 'react'
import styled from "styled-components";
import axios from "axios";

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
    <div>           
         <h2>Cierre del dia</h2>
         <form>
    <label>Fecha</label>
    <Input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>

    <label>Efectivo $</label>
    <Input type="number"  value={cash} onChange={(e)=>{setCash(e.target.value)}}/>
    
    <label>Tarjeta $</label>
    <Input type="number"  value={card} onChange={(e)=>{setCard(e.target.value)}}/>
    
    <label>Transferencia $</label>
    <Input type="number"  value={transfer} onChange={(e)=>{setTransfer(e.target.value)}}/>
    
    <label>Total  $</label>
    <Input type="number" value={total} />
    
    <label>Caja chica $</label>
    <Input type="number" value={cashRegister} onChange={(e)=>{setCashRegister(e.target.value)}}/>
   
    <label>Novedades</label>
    <Input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>

    <Button onClick={()=>handleClick()}>Cierre</Button>
    </form>
</div>
  )
}

export default DaySummary