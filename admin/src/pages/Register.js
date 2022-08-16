import React , {useState} from 'react'
import axios from "axios";

const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
 
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
//register function 
  
const egister = ()=>{
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:3000/register",user )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   };
    return (
        <>    
<div >
    <div >
        Create a new account
    </div>
    <span>
        Already have an account ?
        <a>
            Sign in
        </a>
    </span>
    <div>
        <form>
            <div>
                <div>
                    <input/>
                    </div>
                </div>
                <div>
                    <div>
                        <input/>
                        </div>

                        </div>
                        <div>
                            <div>
                                <input/>
                                </div>
                            </div>
                            <div>
                                <button onClick={egister} >
                                    Register
                                </button>
                            </div>
                        </form>


                                                        </div>
                                                    </div>

        </>
    )
}
}
export default Register
