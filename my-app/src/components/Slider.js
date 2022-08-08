import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styled from "styled-components";

const Container = styled.div`
  width: 1850px;
  height: 700px;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index:80;


`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 180px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 85%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 55px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius:5px;

  &:hover{
    border:2px solid white;
    font-size: 20.5px;
    background-color: #1DA652;
    color :white

}

`;

// background-color: #1DA652;
// color:#EEEEEE;
// border:2px solid #f0f0f0;

////////////////////////////////////

const sliderItems = [
  {
    id: 1,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/035/485/products/photoroom-20210904_1201351-82599ea83a589a276c16307704567399-640-0.png",
    title: "CALZADO",
    desc: "AMPLIA VARIEDAD EN ZAPATILLAS DESDE EL TALLE 14 AL 38.",
    bg: "fff",
  },
  {
    id: 2,
    img: "https://i.ibb.co/Mf9B9v9/pngwing-com.png",
    title: "REGALA DESDE CASA",
    desc: "LO ENVIAMOS ENVUELTO Y A DONDE QUIERAS!",
    bg: "fff",
  },
  {
    id: 3,
    img: "https://i.ibb.co/XxvwrFg/kisspng-television-show-mail-carrier-child-character-postman-5b0bf354301e55-4484345515275098441971.png",
    title: "ENVIO EXPRESS",
    desc: "EN RIO GRANDE DENTRO DE LAS 24HS!",
    bg: "fff",
  },
];

///////////////////////////////

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>VER TIENDA</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowForwardIosOutlinedIcon/>
      </Arrow>
    </Container>
  );
};

export default Slider;