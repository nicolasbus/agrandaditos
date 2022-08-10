//A LA DERECHA DE LA PANTALLA
//DIA EN GRANDE - AL COSTADO EN TAMANO QUE ENTREN 3 UNO ABAJO DEL OTRO --- EFECTIVO - TARJETA - TRANSFERENCIA
//ABAJO EL TOTAL


import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
font-family: Roboto, sans-serif;
margin: 0px;
padding:0px;
align-items: center;
justify-items: center;
display:flex;
`;
const Wrapper = styled.div`
flex:1;
border-radius: 4px;
box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
max-width: 250px;
display: flex;
border-radius: 25px;
margin: 15px;

// position: relative;
`;
const H2 = styled.h2`

`;
const Number = styled.div`
`;
const Date = styled.h2`
`;
const Description = styled.div`
display: grid;
grid-template-columns: 2fr 2fr;
`;
const Text = styled.p`
font-size: 12px;
`;

const MonthSales = () => {
  return (
    <div>                
    <H2>Agosto</H2>
    <Container>

        <Wrapper>
    <div>
        <Number>
            <Date>1</Date>
        </Number>
        <Description>
            <Text>Efectivo: $20.000
            Tarjeta: $70.000
            Transferencia: $10.000</Text>
        </Description>
        <div>
            <h2>Total: $100.000</h2>
        </div>
    </div>   
    </Wrapper>
    <Wrapper>
    <div>
        <Number>
            <Date>2</Date>
        </Number>
        <Description>
            <Text>Efectivo: $20.000
            Tarjeta: $70.000
            Transferencia: $10.000</Text>
        </Description>
        <div>
            <h2>Total: $100.000</h2>
        </div>
    </div>   
    </Wrapper>
    <Wrapper>
    <div>
        <Number>
            <Date>3</Date>
        </Number>
        <Description>
            <Text>Efectivo: $20.000
            Tarjeta: $70.000
            Transferencia: $10.000</Text>
        </Description>
        <div>
            <h2>Total: $100.000</h2>
        </div>
    </div>   
    </Wrapper>
    <Wrapper>
    <div>
        <Number>
            <Date>4</Date>
        </Number>
        <Description>
            <Text>Efectivo: $20.000
            Tarjeta: $70.000
            Transferencia: $10.000</Text>
        </Description>
        <div>
            <h2>Total: $100.000</h2>
        </div>
    </div>   
    </Wrapper>
    </Container>

    </div>



    
  )
}

export default MonthSales