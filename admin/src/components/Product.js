import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Image = styled.img`
height: auto;
width:250px;
z-index: 2;
`;
const Info = styled.div`
  // opacity: 0;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  margin:0;
  // background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  // transition: all 0.5s ease;
  cursor: pointer;
`;
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`;

const FilterSizeOption = styled.option``;

const Product = ({products}) => {

  const deleteProduct=(_id)=>{
    axios.delete(`http://localhost:3000/products/${_id}`)
    .then(res=>{
      console.log(res.data)
      window.location.reload(true);
  })
  .catch(err=>{
    console.log(err)
  })}
  return (
    <Container>
          <Image src={products.img} width="300px"/>
          <Info>
        <ul>
            <li>{products.title}</li>
            <li>{products.brand}</li>
            <li>${products.price}</li>
            <li>{products.color}</li>
            <FilterSize>{products.size?.map(
              (s,index) => (<FilterSizeOption key={index}>{s}</FilterSizeOption>))}
            </FilterSize>
            </ul>
            </Info>
            <Link to={`/producto/editar/${products._id}`}><button>Editar</button></Link>
            <button onClick={()=>{deleteProduct(products._id)}}>Eliminar</button>

    </Container>
  )
}


export default Product



