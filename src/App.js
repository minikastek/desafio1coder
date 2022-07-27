import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Counter } from './components/Counter/Counter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const handleOnAdd = (count) => {

    if(count > 0 ){
      console.log(`La cantidad agregada es : ${count} `)
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greetings="Hola Profe"/>
        <Counter stock={10} onAdd={handleOnAdd} initial={1}/>
        <h1>Momento ofertas !</h1>
      </header>
    </div>
  );
}

export default App;
