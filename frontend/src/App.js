import './App.css';
import Shop from './Pages/Shop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductInfo from './Pages/ProductInfo';
import CartInfo from './Pages/CartInfo';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Men from './Pages/Men';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path="/product" element={<ProductInfo/>}>
        <Route path=':productID' element={<ProductInfo/>}/>
        </Route>
        <Route path='/cart' element={<CartInfo/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;