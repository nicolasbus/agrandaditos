import React from 'react'

const UpdateProduct = () => {
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');


    const handleClick =() =>{ 
      const url = "http://localhost:3000/products/:id"
      const body = 
          {
            title: title,
            brand: brand,
            price: price,
            color: color,
            size: size,
            category: category,
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
        <form>
            <label>Nombre</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label>Marca</label>
            <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
            <label>Precio</label>
            <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <label>Color</label>
            <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
            <label>Talle</label>
            <input type="array" value={size} onChange={(e)=>{setSize(e.target.value)}}/>
            <label>Categoria</label>
            <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            <label>Imagen</label>
            <input type="text" value={img} onChange={(e)=>{setImg(e.target.value)}}/>

            <button onClick={()=>handleClick()}>Agregar</button>
            <button>Cancelar</button>

        </form>
    </div>
  )
}

export default UpdateProduct