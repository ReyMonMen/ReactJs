import './App.css';
import NavBar from './Components/NavBar';
import ItemListConteiner from './Components/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemListConteiner greeting={"Hola SmartSheep"} />
      </main>
      
    </div>
  );
}

export default App;