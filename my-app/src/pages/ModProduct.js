import React,{useEffect} from 'react';
import FormGroup from '../components/FormGroup'
import { useForm } from 'react-hook-form';
import {useParams} from "react-router-dom"

const ModProduct=()=>{
    // const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    // const {id} = useParams();

    // const onSubmit = async (data) => {
    //     try{
    //        const document = await firebase.db.doc("productos/"+id)
    //        .set(data)
    //        console.log(document)
    //     }catch(e){
    //         console.log(e.code)
    //     }
    // }
    // useEffect(
    //     ()=>{
    //         const request = async ()=>{
    //             try{
    //             const response = await firebase.db.doc("productos/"+id)
    //             .get()
    //             if(response){
    //                 setValue("name",response.data().name)
    //                 setValue("mark",response.data().mark)
    //                 setValue("category",response.data().category)
    //                 setValue("gender",response.data().gender)
    //                 setValue("price",response.data().price)
    //                 setValue("color",response.data().color)
    //                 setValue("quanty",response.data().quanty)
    //                 setValue("code",response.data().code)
    //                 setValue("image",response.data().image)


    //             }
    //             }catch(e){
    //                 console.log(e)
    //             }
    //         }
    //         request()
    //     },
    //     [id,setValue])
    return(
        <div></div>
            //  <form onSubmit={handleSubmit(onSubmit)}>
            //     <FormGroup label="Nombre" register={{...register("name",{required:true})}} />
            //     {errors.name && <div>Este campo es obligatorio</div>}
            //     <FormGroup label="Marca" register={{...register("mark",)}} />
            //     <FormGroup label="Talle" register={{...register("size")}} />
            //     <FormGroup label="Categoria" register={{...register("category",{required:true})}} />
            //     <FormGroup label="Genero" register={{...register("gender")}} />
            //     <FormGroup label="Precio" register={{...register("price",{required:true})}} />
            //     <FormGroup label="Color" register={{...register("color",{required:true})}} />
            //     <FormGroup label="Cantidad" register={{...register("quanty",{required:true})}} />
            //     <FormGroup label="Codigo" register={{...register("code")}} />
            //     <FormGroup label="Foto" register={{...register("image")}} />

            //     <button type="submit">Agregar</button>



            // </form>

    )
}

export default ModProduct