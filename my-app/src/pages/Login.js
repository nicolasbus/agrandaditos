import React from 'react';
import FormGroup from '../components/FormGroup';
import {useForm} from 'react-hook-form'

const Login =()=>{
    // const {register, handleSubmit, formState: {errors}} = useForm();

    // const onSubmit = async (data)=>{
    //     try{
    //         console.log("usuario:", data,data.email,data.password);
    //         const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
    //         console.log(responseUser)

    //     }catch(e){
    //         console.log(e.code)

    //         }
    //     }

    return(

        <div>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
    <h2>Ingresar</h2>

    <FormGroup label="Email" type="email" register={{...register("email",{required:true})}} />
    <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true})}} />

    <button type="submit">Ingresar</button>




    </form> */}
    </div>
    )
}

export default Login