import React from 'react';
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Container = styled.div`
display:flex;
`;
const Left = styled.div`
flex:1;
padding:20px;
`;
const Center = styled.div`
flex:1;
padding:20px;
`;
const Title = styled.h3`
margin-bottom:30px;`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px;`;

const Rigth = styled.div`
flex:1;
display:flex;
padding:20px;
flex-direction:column;
;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin:20px 0px;`;
const SocialContainer = styled.div`
display:flex;`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;`;

const ContactItem = styled.div`
margin-bottom:30px;
display:flex;
align-items:center;`;
const Payment = styled.div`
width:50%`;

const Footer =()=>{
    return(
        <Container>
            <Left>
                <Logo>AGRANDADITOS</Logo>
                <Desc></Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999"><FacebookIcon/></SocialIcon>
                    <SocialIcon color="E4405F"><InstagramIcon/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Utiles</Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Inicio</ListItem>

                </List>
            </Center>
            <Rigth>
                <Title>Contacto</Title>
                <ContactItem><LocationOnIcon style={{marginRight:"10px"}} />Viedma 688, Rio Grande, Tierra del Fuego</ContactItem>
                <ContactItem><PhoneIcon style={{marginRight:"10px"}} />+54 2964 420915</ContactItem>                
                <ContactItem><MailOutlineIcon style={{marginRight:"10px"}} />agrandaditos@gmail.com</ContactItem>

                <Payment><img src="https://cdn.cssauthor.com/wp-content/uploads/2019/11/Credit-Card-Icons.jpg?strip=all&lossy=1&ssl=1" /></Payment>
            </Rigth>
        </Container>
    )
}

export default Footer;