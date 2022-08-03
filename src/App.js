import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [page, setPage] = useState('list')

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="Hola Profe"/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
