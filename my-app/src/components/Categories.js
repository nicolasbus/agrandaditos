import React from 'react'
import styled from "styled-components"
import { categories } from '../data';
import CategoryItem from './CategoryItem'

const Container = styled.div`
display:flex;
align-items:center;
margin:0px;
position:relative;
bottom:240px;

`;

const Categories = () => {
  return (
    <Container>
        {categories.map((item,index)=>
            <CategoryItem item={item} key={index} />)}
    </Container>
  )
}

export default Categories