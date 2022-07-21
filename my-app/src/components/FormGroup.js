import React from 'react';

function FormGroup(props) {
    const {label, type, register, placeholder,} = props
    return(
        <div>
            <form>
                <label>{label}</label>
                <input type={type} {...register} placeholder={placeholder || ""} />
            </form>
        </div>
    )
}

export default FormGroup