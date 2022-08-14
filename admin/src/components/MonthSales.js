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

const MonthSales = (props) => {
    const {item} = props

  return (
    <div>                
    <Container>

        <Wrapper>
    <div>
        <Number>
            <Date>{item.date}</Date>
        </Number>
        <Description>
            <Text>Efectivo: {item.cash} <br/>
            Tarjeta: {item.card} <br/>
            Transferencia: {item.transfer} <br/>
            Caja: {item.cashRegister}
            </Text>
        </Description>
        <div>
            <h2>Total: {item.total}</h2>
        </div>
    </div>   
    </Wrapper>

    </Container>

    </div>



    
  )
}

export default MonthSales




