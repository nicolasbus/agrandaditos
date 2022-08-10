import React,{useState} from 'react'
import styled from 'styled-components'

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


const DailySales = () => {

  let [descripcionValue, setDescripcionValue] = useState("")
  let [totalValue, setTotalValue] = useState("")
  let [paymentValue, setPaymentValue] = useState("")
  let [saleValue, setSaleValue] = useState("")

//ARRAY DESCRIPCION VALUE
  const descripcionInput= [descripcionValue, saleValue]

//OBJETO DESCRIPCION
  const descripcion =
    { 
    descripcion: descripcionInput,
    venta: totalValue, 
    pago: paymentValue
  }
  console.log(descripcion)

//////////////////////////

  
  return (
    <div>
      <form>
        <h1>Venta diaria</h1>
        <label>Fecha </label>
        <input type='date'/>






        <div> 
        <div>
        <label>Descripcion</label>
        <input type='text' onChange={(event) => setDescripcionValue(event.target.value)}/>
        <input type='number' onChange={(event) => setSaleValue(event.target.value)}/>
        <button>Agregar</button>
        </div><br/>
        <label>Venta</label>
        <input type='number' onChange={(event) => setTotalValue(event.target.value)}/>

        <h4>Medio de pago</h4>
        <label>Efectivo</label>
        <input type='checkbox' value="Efectivo" onChange={(event) => setPaymentValue(event.target.value)}/>
        <label>Tarjeta</label>
        <input type='checkbox' value="Tarjeta" onChange={(event) => setPaymentValue(event.target.value)}/>
        <label>Transferencia</label>
        <input type='checkbox' value="Transferencia" onChange={(event) => setPaymentValue(event.target.value)}/>
        <button>Agregar</button>
        </div>




{/* 
        <p>Efectivo</p>
        <p>Tarjeta</p>
        <p>Transferencia</p>
        <p>Total</p> */}
<br/><br/>
      <label>Caja</label>
      <input type="number"/>
      </form>

      <button>Cerrar dia</button>     

    </div>
  )
}

export default DailySales


/*
{
  fecha: {input.fecha}
  ventas: [[input.descripcion, input.total, input.mediodepago],[descripcion, total, mediodepago],[descripcion, total, mediodepago]]
  total: input.total
  caja: input.caja
}

*/



// var myArray = ['two','one', 'two', 'three','two','two'];
// var myIndex = myArray.indexOf('two');
// if (myIndex !== -1) {
//     myArray.splice(myIndex, 1);
// }
// console.log(myArray)

// ///////////////////////////////////////////////////////


// const sale = ()=>{
//   var myArray = [Product.size];
//   var myIndex = myArray.indexOf({body.size});
//   if (myIndex !== -1) {
//   myArray.splice(myIndex, 1);
//   }
// }


// ReadableStreamDefaultController.