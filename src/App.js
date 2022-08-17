import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/CartContext/CartContext';
import {NotificationProvider} from './notification/Notification'
import {CartContainer} from '../src/components/Cart/CartContainer'
import error404 from '../src/Assets/enconstruccion.png'

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
              <Route path='/cart' element={<CartContainer />} greeting='Tu carrito actual'/>
              <Route path='*' element={<h1><img src={error404} style={{marginTop: '8%'}}/>No deberias estar aqui, no esta listo aun!</h1>}/> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
