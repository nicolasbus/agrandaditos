import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  // width: 100vw;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white; 

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Img = styled.img`
  // display: flex;
  // width:250px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin:20px;
`;

const UpdateProduct = () => {
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [categories, setCategories] = useState('');
    const [img, setImg] = useState('');

    const params = useParams();

    useEffect(()=>{
      axios.post('http://localhost:3000/products/productdata', {_id: params._id})
      .then(res=>{
        console.log(res.data[0])
        const productdata = res.data[0]
        setTitle(productdata.title)
        setBrand(productdata.brand)
        setPrice(productdata.price)
        setColor(productdata.color)
        setSize(productdata.size)
        setCategories(productdata.categories)
        setImg(productdata.img)
    })
    },[ ])

    const handleClick =() =>{ 
      const url = `http://localhost:3000/products/${params._id}`
      const body = 
          {
            _id: params._id,
            title: title,
            brand: brand,
            price: price,
            color: color,
            size: size.split(','),
            categories: categories,
            img: img
          }

        axios.put(url,body)
        .catch((err)=>{console.log("err",err)})
        .then(response => { 
            console.log(response.data)
        })


      //   axios.post(`http://localhost:3000/products/update`,body)
      //   .then(res=> { 
      //       console.log(res.data)
      //     })
      //   .then(err=> { 
      //     console.log(err)} )
      // ;
    }

      return (
    <Container>
      <Wrapper>
        <Title>Modificar Producto</Title>
        <h3>El ID del producto es: {params._id}</h3>
        <h2>{title}</h2>
        {/* <Img src={img}/> */}
        <Form>
            <label>Nombre</label>
            <Input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label>Marca</label>
            <Input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
            <label>Precio</label>
            <Input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <label>Color</label>
            <Input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
            <label>Talle</label>
            <Input type="array" value={size} onChange={(e)=>{setSize(e.target.value)}}/>
            <label>Categoria</label>
            <Input type="text" value={categories} onChange={(e)=>{setCategories(e.target.value)}}/>
            <label>Imagen</label>
            <Input type="text" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
            <div>
            <Button onClick={()=>handleClick()}>Editar</Button>
            <Link to="/producto/inventario"><Button>Cancelar</Button></Link>
            </div>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default UpdateProduct