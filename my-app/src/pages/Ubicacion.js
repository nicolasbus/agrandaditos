import React from 'react'
import Location from '../components/Location'
import styled from "styled-components"
import {Link} from "react-router-dom";
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
width:1200px;
height:42px;
bottom:0px;
top:190px;
left:30px;
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
const Info = styled.p`
font-size: 20px;
margin:0px;
`;

const Ubicacion =()=>{
    return(
        <Container>
        <Wrapper>

            <Text><Title className="title">Donde estamos?</Title>
                <Info>Podes encontrarnos en:</Info> 
            <a href="https://www.google.com/maps/dir//Viedma+688,+R%C3%ADo+Grande,+Tierra+del+Fuego/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0xbc4b163e856c5965:0x9427ae69f79ed35c!3e0?sa=X&ved=2ahUKEwjAj53skqz5AhXuvJUCHTU4CoMQox16BAgDEBI"><Info> Viedma 688, Rio Grande, Tierra del Fuego</Info>
</a>
<Info>  Tel: 02964-420915 <br />
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
