import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Counter } from './components/Counter/Counter';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [page, setPage] = useState('list')

  // const handleOnAdd = (count) => {
  //   if(count > 0 ){
  //     console.log(`La cantidad agregada es : ${count} `)
  //   } 
  // }

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="Hola Profe"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>

      {/* <Counter stock={10} onAdd={handleOnAdd} initial={1}/> */}
    </div>
  );
}

export default App;
