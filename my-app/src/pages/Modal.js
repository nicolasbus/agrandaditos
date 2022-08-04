import React from 'react'
import styled from 'styled-components'

const ContainerModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display:flex;
`;
const WrapperModal = styled.div`
max-width: 650px;
max-height: 600px;
position: fixed;
bottom:30%;
left: 30%;
box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
border-radius: 8px;
background-color:white;
`;
const ModalRight = styled.div`
width: 100%;
display:flex;
`;
const CloseBtn = styled.p`
position: fixed;
top: 8px;
right: 8px;
cursor: pointer;
`;
const Content = styled.div`
flex:1;
flex-direction: column;
justify-content: center;
text-align: center;
margin-top: 3rem;
padding: 1rem 2rem;
`

const Modal = ({open, onClose}) => {
  

    if (!open) return null;
  
    return (
    <ContainerModal ModalonClick={onClose}>
        <WrapperModal onClick={(e) => { e.stopPropagation(); }}>
            <ModalRight>
            <CloseBtn onClick={onClose}>X</CloseBtn>

            <Content>
                <p>Nombre completo</p>
                <input/>
                <p>Direccion</p>
                <input/>
                <p>Ciudad</p>
                <input/>
                <p>Provincia</p>
                <input value="Tierra del Fuego"/>
                <p>Email</p>
                <input/>
                <p>Telefono</p>
                <input/>
            </Content>
            <Content>
                <h2>Es para regalar?</h2>
                <input type='checkbox'/>
                <h4>Datos del receptor</h4>
                <p>Nombre completo</p>
                <input/>
                <p>Direccion</p>
                <input/>
                <p>Ciudad</p>
                <input/>
                <p>Provincia</p>
                <input value="Tierra del Fuego"/>
                <p>Telefono</p>
                <input/>
            </Content>
            <div className='btnContainer'>
                <button className='btnPrimary' >Pagar</button>
                <button className='btnPrimary' onClick={onClose}>Cancelar</button>

            </div>
            </ModalRight>
        </WrapperModal>
    </ContainerModal>
  )
}

export default Modal