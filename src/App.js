import './App.css';
import Navbar from './components/Navbar.js';
import ItemListConteiner from './components/ItemListConteiner.js';
import ItemDetailConteiner from './components/ItemDetailConteiner.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    //Contenedor de navegación
    <BrowserRouter> 
    <Navbar/>
      <Routes>
        <Route path="/"  element={<ItemListConteiner/>}></Route>
        <Route path="/category/:id" element={<ItemListConteiner/>}/>
        <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
