// import React,{useState} from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
// `;
// const Form = styled.form`
// `;
// const Title = styled.div`
// `;
// const Date = styled.input`
// `;
// const Description = styled.div`
// `;


// const DailySales = () => {

//   let [descripcionValue, setDescripcionValue] = useState("")
//   let [totalValue, setTotalValue] = useState("")
//   let [paymentValue, setPaymentValue] = useState("")
//   let [saleValue, setSaleValue] = useState("")



// //////////////////////////
// const [listRespuestas, setlistRespuestas] = useState([]);




// ////////////////
  
//   return (
//     <div>
//       <form>
//         <h1>Venta diaria</h1>
//         <label>Fecha </label>
//         <input type='date'/>






//         <div> 
//         <div>
//         <label>Descripcion</label>
//         <input type='text' onChange={(event) => setDescripcionValue(event.target.value)}/>
//         <input type='number' onChange={(event) => setSaleValue(event.target.value)}/>
//         <button>Agregar</button>


//      </div><br/>
//         <p></p>
//         <label>Venta</label>
//         {/* <input type='number' onChange={(event) => setTotalValue(event.target.value)}/> */}
//         <input type='number' value={saleValue} />

//         <h4>Medio de pago</h4>
//         <label>Efectivo</label>
//         <input type='checkbox' value="Efectivo" onChange={(event) => setPaymentValue(event.target.value)}/>
//         <label>Tarjeta</label>
//         <input type='checkbox' value="Tarjeta" onChange={(event) => setPaymentValue(event.target.value)}/>
//         <label>Transferencia</label>
//         <input type='checkbox' value="Transferencia" onChange={(event) => setPaymentValue(event.target.value)}/>
//         <button>Agregar</button>
//         </div>




// {/* 
//         <p>Efectivo</p>
//         <p>Tarjeta</p>
//         <p>Transferencia</p>
//         <p>Total</p> */}
// <br/><br/>
//       <label>Caja</label>
//       <input type="number"/>
//       </form>

//       <button>Cerrar dia</button>     

//     </div>
//   )
// }

// export default DailySales

import React, {useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { faker } from '@faker-js/faker';
import Sale from './Sale'

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
    const [date, setDate] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [saleInput, setSaleInput] = useState('');
    const [total, setTotal] = useState('');
    const [cashRegister, setCashRegister] = useState('');
    const [paymentMethod,setPaymentMethod] = useState('');
    const [sales,setSales] = useState('');
    const [sale,setSale] = useState([])
    const [cash, setCash] = useState('')
    const [card, setCard] = useState('')
    const [transfer, setTransfer] = useState('')

//ARRAY DESCRIPCION VALUE
//OBJETO DESCRIPCION
  // const descripcion =
  //   { 
  //   descripcion: descripcionInput,
  //   venta: totalValue, 
  //   pago: paymentValue
  // }


  const payment = [cash,card,transfer]

  
  const handleAddSale=()=>{
    const newSale = {
      description: faker.commerce.product(),
      // sale: faker.commerce.price(),
      total: faker.commerce.price(),    }
      console.log(newSale)
    setSales([sale, newSale])

  }
  const body2 = 
  {
    date: date,
    sale: saleInput,
    paymentMethod: [(cash,card,transfer)],
    description: descriptionInput,

  }
  console.log(body2)

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
    const salesList = sale.map((sales,index) => {
      return(
          <div>
              <Sale sales={sales} key={index} />
          </div>
      )
  })
      return (


        <Container><Wrapper>
        <Title>Ventas</Title>
        <Form>
            <label>Fecha</label>
            <Input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            

            <label>Venta $</label>
            <Input type="number" value={saleInput} onChange={(e)=>{setSaleInput(e.target.value)}}/>
            <br/>    

          <h4>Medio de pago</h4>
         <label>Efectivo</label>
          <Input type='checkbox' value="Efectivo" onChange={(e) => setCash(e.target.value)}/>
         <label>Tarjeta</label>
         <Input type='checkbox' value="Tarjeta" onChange={(e) => setCard(e.target.value)}/>
         <label>Transferencia</label>
         <Input type='checkbox' value="Transferencia" onChange={(e) => setTransfer(e.target.value)}/>
         <br/>
            <label>Observaciones</label>
            <Input type="text" value={descriptionInput} onChange={(e)=>{setDescriptionInput(e.target.value)}}/>



         <Button onClick={()=>handleClick()}>Agregar</Button>

<br/><br/><br/><br/><br/>


            <Link to="/producto/inventario"><Button>Cancelar</Button></Link>
        </Form>
    </Wrapper></Container>
  
  )
}

export default DailySales