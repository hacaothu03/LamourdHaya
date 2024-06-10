import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import animals_banner from './Components/Assets/banner_stuffedanimals.png'
import dolls_banner from './Components/Assets/banner_dolls.png'
import tools_banner from './Components/Assets/banner_crochettools.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/animals' element={<ShopCategory banner={animals_banner} category="animals"/>}/>
        <Route path='/dolls' element={<ShopCategory banner={dolls_banner} category="dolls"/>}/>
        <Route path='/tools' element={<ShopCategory banner={tools_banner} category="tools"/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
