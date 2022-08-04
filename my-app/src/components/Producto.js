import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faBagShopping} from '@fortawesome/free-solid-svg-icons'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 0px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // &:hover ${Info}{
  //   opacity: 1;
  // }
`;

const Circle = styled.div`
margin:50%
`;

const Image = styled.img`
  height: auto;
  width:250px;
  z-index: 2;
  
`;

const Icon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  color:red;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  z-index:100;
  transition: all 0.5s ease;
  /* &:hover {
    opacity:10;  
    background-color:#fff;
    transform: scale(2);
  } */
`;
const P = styled.div`
display: flex;
position: relative;
align-items: center;

justify-content: center;

// right:150px;
// top:290px;
// z-index:100;
// font-weight: bold;
  
`
;


function Producto (props) {
  const {item} = props
  return (
      <Container>
          <Circle/>

          <Image className="card__image" 
          src={item.img}

          alt="Imagen del producto"
          />
          <P>
          <Icon>
          <Link to={'/productos/'+item._id+'/'}>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </Link>
           </Icon>
           <Icon>
           <Link to={'/productos/'+item.
           _id+'/'}>
          <FontAwesomeIcon icon={faBagShopping} /> 
          </Link>
          </Icon>
          {item.title} <br/>
          ${item.price}</P> 


      </Container>
  )
}
export default Producto