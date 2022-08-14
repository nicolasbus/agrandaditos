import Home from './pages/Home';
import NewProduct from './pages/products/NewProduct';
import UpdateProduct from './pages/products/UpdateProduct'
import Inventory from './pages/products/Inventory'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Sales from './pages/sales/Sales';
import DaySummary from './components/DaySummary';



function App() {
  return (
<Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/producto/agregar" element={<NewProduct />} />   
        <Route path="/producto/editar/:_id" element={<UpdateProduct />} />   
        <Route path="/producto/inventario" element={<Inventory />} />   
        <Route path="/ventas" element={<Sales/>} />  
        <Route path="/cierre" element={<DaySummary/>} />   
 
      </Routes>
    </Router>  
  );
}

export default App;
