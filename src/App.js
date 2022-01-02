import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Components/Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
