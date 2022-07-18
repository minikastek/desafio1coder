import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Counter } from './components/Counter/Counter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <Counter/> */}
        <ItemListContainer greetings="Hola Profe"/>
        <h1>Momento ofertas !</h1>
      </header>
    </div>
  );
}

export default App;
