import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import publicRequest from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
position:relative;
top:80px;   
`;

const Wrapper = styled.div`
display:flex;
position:relative;
padding:40px;
`;


const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
width:100%;
height:50vh;
object-fit:cover;

`;

const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
position:relative;
left:200px;
`;


const Title = styled.h1`
font-weight:200;
`;

const Desc = styled.p`
margin:20px 0px;`;

const Price = styled.span`
font-weight:100;
font-size:40px;
`;

const FilterContainer = styled.div`
width:50%;
margin: 30px 0px;
display:flex;
justify-content:space-between;
`;
const Filter = styled.div`
display:flex;
align-items:center;
`;

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;

/* const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
cursor: pointer;
margin:0px 5px
`; */
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height:30px;
border-radius:10px;
border:1px solid black;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;

const Button = styled.button`
padding: 15px;
border:2px solid black;
background-color:white;
cursor:pointer;
font-weight:500;
margin:5px;

 &:hover{
  background-color: #1DA652;
  color:#fff;
  border:2px solid #f0f0f0;
}
`;




const Detalle = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.brand}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c, index) => (
                <FilterColor color={c} key={index} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Talle</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
              <FilterSizeOption selected></FilterSizeOption>
                {product.size?.map((s, index) => (
                  <FilterSizeOption key={index}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <br/>
          <br/>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>AÑADIR</Button>
            <Button>VOLVER</Button>

          </AddContainer>
        </InfoContainer>
      </Wrapper>

    </Container>
  );
};

export default Detalle;