import './App.css';
import Navbar from './components/Navbar.js';
import ItemListConteiner from './components/ItemListConteiner.js';
import ItemDetailConteiner from './components/ItemDetailConteiner.js';
import Cart from './components/Cart.js';
import CartContextProvider  from './components/CartContext.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
function App() {
  return (
    //Contenedor de navegación
    <CartContextProvider>
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route path="/"  element={<ItemListConteiner/>}></Route>
          <Route path="/category/:id" element={<ItemListConteiner/>}/>
          <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
