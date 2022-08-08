import Upbar from './components/Upbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detalle from './pages/Detalle'
import NewProduct from './pages/NewProduct';
import ModProduct from './pages/ModProduct';
import ProductList from './pages/ProductList';
import Checkout from './pages/Checkout'
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom"
import Ubicacion from './pages/Ubicacion';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Success from './pages/payment/Success';
import Pending from './pages/payment/Pending';
import Failure from './pages/payment/Failure';
const App =()=>{
  // const user = true
  return(
    <Router>
      <Upbar/>
      <Menu/> 
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/registrarse" element={<Register />} />
        {/* {user ? <Redirect to="/"/> : <Login />} */}
        <Route path="/ingresar" element={<Login />} />
        {/* {user ? <Redirect to="/"/> : <Login />} */}
        <Route path="/productos/:_id" element={<Detalle />} />
        <Route path="/productos" element={<ProductList/>} />
        <Route path="/productos/:categories" element={<ProductList/>} />
        <Route path="/carro" element={<Cart/>} />
        <Route path="/productos/nuevo" element={<NewProduct />} />
        <Route path="/productos/modificar/:id" element={<ModProduct />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/failure" element={<Failure />} />




      </Routes>
      {/* <Footer /> */}
  
    </Router>
  );
}

export default App;
