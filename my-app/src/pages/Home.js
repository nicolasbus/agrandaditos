import '../styles/Home.css';
import Store from './Store';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import BuyerInfo from './BuyerInfo';
import ButtonMenu from '../components/ButtonMenu'

const Home =()=>{
    return(     
         <div className="container">   
               <Slider/>
               <ButtonMenu/>
               <Categories/>
               <Store/>

      {/* <BuyerInfo/> */}
        </div>

    )
}

export default Home



             {/* <div className="subbaner">

                 <div className="Camion">                 
                <img src="https://i.ibb.co/DC6CKPw/Captura-de-Pantalla-2022-02-18-a-la-s-18-18-03.png" alt="camion" className="camion" />
                   <h2 className="camtit">ENVÍOS EN TIERRA DEL FUEGO</h2>
                   <p className="camtext">Comprá sin moverte de casa! <br />
                   Hacemos envios SOLO en Tierra Del Fuego.</p>
                 </div>

                 <div className="Etiqueta">                 
                   <img src="https://i.ibb.co/T4wHgPj/Captura-de-Pantalla-2022-02-18-a-la-s-18-18-07.png" alt="etiqueta" className="etiqueta"/>
                   <h2 className="etitit">PAGA COMO QUIERAS!</h2>
                   <p className="etitext">Podes pagar con tarjeta de credito en cuotas.<br />
                    Tambien a traves de transferencia bancaria.</p>
                 </div>

                 <div className="Candado">
                   <img src="https://i.ibb.co/N3jFbVb/Captura-de-Pantalla-2022-02-18-a-la-s-18-18-14.png" alt="candado" className="candado" />
                   <h2 className="cantit">TUS DATOS ESTAN PROTEGIDOS</h2>
                   <p className="cantext">Nuestros sistemas de seguridad protegen todos los datos de <br/>
                   nuestros clientes con máxima confidencialidad.</p>
                 </div>

             </div> */}
