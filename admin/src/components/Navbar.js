import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
cursor:pointer;
width: 210px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo src="https://i.ibb.co/9svYwmC/Photo-Room-20220801-104426.jpg" widht="5px"/>
        </Left>
        <Center>
        </Center>
        <Right>
          <MenuItem>Ventas</MenuItem>
          <Link to="/producto/inventario"><MenuItem>Inventario</MenuItem></Link>
          <Link to="/producto/agregar"><MenuItem>Agregar Producto</MenuItem></Link>
          <MenuItem>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;