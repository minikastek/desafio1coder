
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/CartContext/CartContext';
import {NotificationProvider} from './notification/Notification'
import {CartContainer} from '../src/components/Cart/CartContainer'
import error404 from '../src/Assets/enconstruccion.png'
import {Checkout} from './components/Checkout/Checkout';

function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greetings="Listado de productos"/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<h1 style={{textAlign: 'center'}}><img src={error404} style={{marginTop: '7%'}}/>No deberias estar aqui !</h1>}/> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
