import './App.css';

function App() {
  return (
    <header class="d-flex justify-content-around">
      <h1>CandyShop</h1>
      <nav class="d-flex justify-content-center align-item-center">
        <ul class="nav justify-content-center aling-item-center">
          <li class="nav-item">
              <a class="nav-link active text-light" href="#" aria-current="page">Tienda</a>
          </li>
          <li class="nav-item">
              <a class="nav-link text-light" href="#">Bebidas</a>
          </li>
          <li class="nav-item">
              <a class="nav-link text-light" href="#">Otros</a>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default App;
