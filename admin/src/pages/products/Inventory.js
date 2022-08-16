import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Product from '../../components/Product'
import styled from "styled-components";
import SearchComponent from '../../components/SearchComponent';


const Container = styled.div`
    // padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Div = styled.div`
display:flex;
`;
const Label = styled.label`
margin:10px;

`;
const Input = styled.input`
height:25px;
width:45px;
`;
const Inventory = () => {
    const [product,setProduct] = useState([])
    const [ search, setSearch ] = useState("") 
    const searcher = (e) =>{
        setSearch(e.target.value)
        
    } 
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(res =>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const results = !search ? product : product.filter((dato)=> dato.size.toString().toLowerCase().includes(search.toLocaleLowerCase()))
    // && !search ? product : product.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

    const productList = results.map((products,index) => {
        return(
            <div>
                <Product products={products} key={index} />
            </div>
        )
    })


  return (
    <div>
        <Div>
             <Label>Talle</Label>
             <Input value={search} onChange={searcher}c type="text" />
         </Div>
         <Container>
              {productList}
         </Container>
    </div>
  )
}
export default Inventory