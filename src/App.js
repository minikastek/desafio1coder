import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/CartContext/CartContext';
import {NotificationProvider} from './notification/Notification'

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greetings="Listado de productos"/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer greeting='Listado filtrado'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
