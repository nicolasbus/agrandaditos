import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://s1.1zoom.me/b5050/48/Toys_White_background_Infants_Three_3_Smile_521614_1920x1080.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: rgb(223, 15, 15);
  color: white;
  cursor: pointer;`;

const Register = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/users/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

// 	return (
// 		<div>
// 			<div>
// 				<div>
// 					<h1>Welcome Back</h1>
// 					<Link to="/ingresar">
// 						<button type="button">
// 							Sing in
// 						</button>
// 					</Link>
// 				</div>
// 				<div>
// 					<form onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="username"
// 							name="username"
// 							onChange={handleChange}
// 							value={data.username}
// 							required
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 						/>
// 						{error && <div>{error}</div>}
// 						<button type="submit" >
// 							Sing Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Register;




  return (
    <Container>
      <Wrapper>
        <Title>CREAR CUENTA</Title>
        <Form onSubmit={handleSubmit}>
          <Input  
                type="text"
				name="username"
                placeholder="Usuario"
 				onChange={handleChange}
 				value={data.username}
 				required
                 />
          <Input 
 							type="email"
 							placeholder="Email"
 							name="email"
 							onChange={handleChange}
 							value={data.email}
 							requiredplaceholder="Email" />
          <Input 
                            placeholder="Contraseña"
           		    		type="password"
 							name="password"
 							onChange={handleChange}
 							value={data.password}
 							required
 						/>
 						{error && <div>{error}</div>} 
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            Deseamos que tenga una buena experiencia en nuestro sitio
            y que pronto pueda visitarnos por <b>Viedma 688, Rio Grande, Tierra del Fuego</b>
          </Agreement>
          <Button type="submit">CREAR CUENTA</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;