import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
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
          if(response.data){
            console.log(response.data)
          }
        })
      ;
    }

      return (
    <div>
        <h2>Modificar Producto</h2>
        <h3>El ID del producto es: {params._id}</h3>
        <form>
            <label>Nombre</label>
            <input type="text" defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label>Marca</label>
            <input type="text" defaultValue={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
            <label>Precio</label>
            <input type="text" defaultValue={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <label>Color</label>
            <input type="text" defaultValue={color} onChange={(e)=>{setColor(e.target.value)}}/>
            <label>Talle</label>
            <input type="array" defaultValue={size} onChange={(e)=>{setSize(e.target.value)}}/>
            <label>Categoria</label>
            <input type="text" defaultValue={categories} onChange={(e)=>{setCategories(e.target.value)}}/>
            <label>Imagen</label>
            <input type="text" defaultValue={img} onChange={(e)=>{setImg(e.target.value)}}/>

            <button onClick={()=>handleClick()}>Actualizar</button>
            <button>Cancelar</button>

        </form>
    </div>
  )
}

export default UpdateProduct