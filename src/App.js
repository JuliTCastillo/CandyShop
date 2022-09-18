import './App.css';
import Navbar from './components/Navbar.js';
// import ItemListConteiner from './components/ItemListConteiner.js';
import ItemDetailConteiner from './components/ItemDetailConteiner.js';
function App() {
  return (
    <>
      <Navbar/>
      {/* <ItemListConteiner/> */}
      <ItemDetailConteiner/>
    </>
  );
}

export default App;
