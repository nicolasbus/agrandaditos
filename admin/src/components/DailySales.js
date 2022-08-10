import React from 'react'
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
  return (
    <div>
      <form>
        <h1>Venta diaria</h1>
        <label>Fecha </label>
        <input type='date'/>
        <div>

        <label>Descripcion</label>
        <input type='text'/>

        <label>Total</label>
        <input type='number'/>

        <label>Medio de pago</label>
        <input type='checkbox'/>
        <input type='checkbox'/>
        <input type='checkbox'/>
        <button>Agregar</button>
        </div>
        <p>CAMPERA              $9900  Tarjeta</p>
        <p>BUZO                 $5900  Tarjeta</p>
        <p>CAMPERA              $9900  Tarjeta</p>
        <p>REMERA               $2700  Tarjeta</p>
        <p>CAMPERA              $9900  Tarjeta</p>

        <p>Efectivo</p>
        <p>Tarjeta</p>
        <p>Transferencia</p>
        <p>Total</p>

      <label>Caja</label>
      <input type="number"/>
      </form>

      <button>Cerrar dia</button>     

    </div>
  )
}

export default DailySales


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