import React from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
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
;
`;

const Ul = styled.ul`
list-style: none;
`;

const Li = styled.li`
margin:10px;
`;
const Image = styled.img`
height: auto;
//PC
/* width:250px; */
//MAC 
width:200px;
z-index: 2;
`;
const Info = styled.div`
  width: 100%;
  flex: 1;
  padding: 0px 50px;
  height: 100%;
  position: relative;
  margin:0;
  z-index: 3;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`;

const Button = styled.button`
// width: 40px;
// height: 40px;
// border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
/* border-box: 1px solid white; */
margin: 10px;`

const FilterSizeOption = styled.option``;

const Sale = (props) => {
  const {item} = props

//   const deleteProduct=(_id)=>{
//     axios.delete(`http://localhost:3000/products/${_id}`)
//     .then(res=>{
//       console.log(res.data)
//       window.location.reload(true);
//   })
//   .catch(err=>{
//     console.log(err)
//   })}
  return (
    <Container>

        <Ul>
            {/* <FilterSize>{item.paymentMethod?.map(
              (s,index) => (<FilterSizeOption key={index}>{s}</FilterSizeOption>))}
            </FilterSize> */}
          <Li>{item.date} </Li>
          <Li>${item.total} </Li>
          <Li>{item.paymentMethod}</Li>
            <Li>{item.description}</Li>
            </Ul>
            {/* <Link to={`/producto/editar/${item._id}`}><Button>Editar</Button></Link> */}
            {/* <Button onClick={()=>{deleteProduct(products._id)}}>Eliminar</Button> */}

    </Container>
  )
}


export default Sale



