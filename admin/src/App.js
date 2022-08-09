import Home from './pages/Home';
import NewProduct from './pages/products/NewProduct';
import UpdateProduct from './pages/products/UpdateProduct'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom"


function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/producto/agregar" element={<NewProduct />} />   
        <Route path="/producto/editar/:_id" element={<UpdateProduct />} />   
      </Routes>
    </Router>  
  );
}

export default App;
