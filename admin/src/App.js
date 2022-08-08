import Home from './pages/Home';
import NewProduct from './pages/products/NewProduct';
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
        <Route path="/agregar" element={<NewProduct />} />   
      </Routes>
    </Router>  
  );
}

export default App;
