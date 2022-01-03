import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Pages/Products/Products';
import ProductsDetails from './Components/Pages/ProductDetails/ProductDetails'
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:productId" element={<ProductsDetails />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
