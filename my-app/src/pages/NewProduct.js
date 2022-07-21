import React from 'react';
import FormGroup from '../components/FormGroup'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const Container = styled.div`
display:inline-block;
position:relative;
top:50px;
`;

const NewProduct=()=>{
    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = async (data) => {
    //     try{
    //         const document = await firebase.db.collection("productos")
    //         .add(data)
    //         console.log(document)
    //     }catch(e){
    //         console.log(e.code)
    //     }
    // }
    return(
        <Container>
             {/* <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("name",{required:true})}} />
                <FormGroup label="Marca" register={{...register("mark",)}} />
                <FormGroup label="Talle" register={{...register("size")}} />
                <FormGroup label="Categoria" register={{...register("category",{required:true})}} />
                <FormGroup label="Genero" register={{...register("gender")}} />
                <FormGroup label="Precio" register={{...register("price",{required:true})}} />
                <FormGroup label="Color" register={{...register("color",{required:true})}} />
                <FormGroup label="Cantidad" register={{...register("quanty",{required:true})}} />
                <FormGroup label="Codigo" register={{...register("code")}} />
                <FormGroup label="Foto" register={{...register("image")}} />

                <button type="submit">Agregar</button>



            </form> */}
        </Container>
    )
}

export default NewProduct