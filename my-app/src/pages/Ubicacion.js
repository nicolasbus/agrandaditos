import React from 'react'
import Location from '../components/Location'
import styled from "styled-components"

const Container = styled.div`
`;
const Wrapper = styled.div`
padding:20px;
display:flex;
position: absolute;
top:150px`;

const Img = styled.img`
/* width:80px; */
height:160px;
flex:3;
top:80px;
`;

const Map = styled.div`
width:1000px;
height:80px;
left:150px;
bottom:0px;
position:absolute;
margin-left: auto;
margin-right: auto;
`;
const Text = styled.div`
font-family: sans-serif;

`;
const Title = styled.h2`
font-size: 28px;
`;
const Info = styled.h2`
font-size: 25px;
margin:0px;
`;

const Ubicacion =()=>{
    return(
        <Container>
        <Wrapper>
            
            <Text><Title className="title">Donde estamos?</Title>
                <p className="text"></p>
                <Info>Podes encontrarnos en: <br/>
                Viedma 688, Rio Grande, Tierra del Fuego <br />
                 Tel: 02964-420915 <br />
                 WhatsApp: 02964-419063
                </Info>
            </Text>
                <Img className="Img" src="https://i.ibb.co/8NJYqFQ/IMG-4928.jpg"/>
                <Img className="Img2" src="https://i.ibb.co/316kCbv/IMG-4951.jpg"/>
                <Img className="Img3"src="https://i.ibb.co/k1JdRHZ/IMG-4947.jpg"/>
            <Map>
                <Location/>
            </Map>
            </Wrapper>

            </Container>

                )
}

export default Ubicacion
