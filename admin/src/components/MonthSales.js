//A LA DERECHA DE LA PANTALLA
//DIA EN GRANDE - AL COSTADO EN TAMANO QUE ENTREN 3 UNO ABAJO DEL OTRO --- EFECTIVO - TARJETA - TRANSFERENCIA
//ABAJO EL TOTAL


import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
box-sizing: border-box;
width: 1000px;
display: flex;
padding: 3rem;
`;

const MonthSales = () => {
  return (
    <Container>
        <h1>MAYO</h1>
    <div>
        <div>
            <h2>1</h2>
        </div>
        <div>
            <p>Efectivo: $20.000</p>
            <p>Tarjeta: $70.000</p>
            <p>Transferencia: $10.000</p>
        </div>
        <div>
            <h2>Total: $100.000</h2>
        </div>
    </div>
    <div>
        <div>
            <h2>2</h2>
        </div>
        <div>
            <p>Efectivo: $10.000</p>
            <p>Tarjeta: $40.000</p>
            <p>Transferencia: </p>
        </div>
        <div>
            <h2>Total: $50.000</h2>
        </div>
    </div>
    <div>
        <div>
            <h2>3</h2>
        </div>
        <div>
            <p>Efectivo: $20.000</p>
            <p>Tarjeta: $80.000</p>
            <p>Transferencia: $6.000</p>
        </div>
        <div>
            <h2>Total: $106.000</h2>
        </div>
    </div>

<div>  
    <h2>Balance: $190.000 </h2>
            <p>Efectivo: $60.000</p>
            <p>Tarjeta: $80.000</p>
            <p>Transferencia: $16.000</p>
</div>
    </Container>
    
  )
}

export default MonthSales