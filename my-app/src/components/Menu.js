import React from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { SearchOutlined, ShoppingCartOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
height: 90px;
background:white;
z-index:100;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
background:white;
align-items: center;
justify-content: space-between;

`;

const Left = styled.div`
flex:1;
`;

const Logo = styled.img`
cursor:pointer;
width: 210px;
`;

const Center = styled.div`
flex:1;
`;
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;
`;

const MenuItem = styled.div`
cursor:pointer;`;

const WrapperTwo = styled.div`
padding: 10px 20px;

`;

const Ul = styled.ul`
display:flex;
list-style:none;
text-decoration:none;

`;

const Li = styled.li`
position:relative;
flex:1;
left:250px;
margin:40px;
align-items:center;
justify-content: center;
bottom:40px;
color:black;



`;


const Menu = () => {
const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
            {/* <Link to="/"><Logo src="https://i.ibb.co/3rykGFX/LogoAG.png" /></Link> */}
            <Link to="/"><Logo src="https://i.ibb.co/9svYwmC/Photo-Room-20220801-104426.jpg" /></Link>
            </Left>
            <Center></Center>
            <Right>
            <MenuItem>

                <SearchOutlined />
                <Link to="/ingresar"><PersonOutlineOutlined/></Link>
                <Link to="/carro">
                  <Badge badgeContent={quantity} color="primary">
                   <ShoppingCartOutlined />
                </Badge>
                </Link>
            </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )}

export default Menu