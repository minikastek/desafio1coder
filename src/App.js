import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Counter } from './components/Counter/Counter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const handleOnAdd = (count) => {
    console.log(`La cantidad agregada es : ${count} `)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greetings="Hola Profe"/>
        <Counter stock={10} onAdd={handleOnAdd}/>
        <h1>Momento ofertas !</h1>
      </header>
    </div>
  );
}

export default App;
