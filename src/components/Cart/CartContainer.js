import React, { useContext } from 'react'
import './Cart.css'
import { Table } from "react-bootstrap";
import CartContext from '../CartContext/CartContext'
import { Link } from 'react-router-dom';
import carritoVacio from '../../Assets/carritoVacio.png'
import NotificationContext from '../../notification/Notification'
import { Checkout } from '../Checkout/Checkout';

export const CartContainer = () => {

  const { cart,removeItem,clearCart,getTotal } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext)

  const totalProd = (quantity,price) => {
    let accu = 0;
    accu = quantity * price;
    return accu
  }
  

  return (
    <div>

      <div>
        <h1 className='titulo'>{cart.length === 0 ? 'Tu carrito esta muy triste, Agrega algo!' :  'Listado de tus productos'}</h1>
      </div>

      <div>
      {
        cart.length !== 0 &&
          <Table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio unitario</th>
                <th scope="col">Precio Total</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>{prod.quantity}</td>
                  <td>${prod.price}</td>
                  <td>${totalProd(prod.quantity,prod.price)}</td>
                  <td>
                    <button className='btn' id={prod.id} >-</button>
                    <button className='btn' id={prod.id} >+</button>
                  </td>
                  <td><button className='btn btn-danger' id={prod.id} onClick={() => removeItem(prod.id)}>Eliminar</button></td>
                </tr>
              ))}

              <tr>
                <td>Suma total</td>
                <td></td>
                <td></td>
                <td>$ {getTotal(cart)}</td>
                <td></td>
                <td><button className='btn btn-danger' onClick={() => clearCart() } >Eliminar Todo</button></td>
              </tr>
            </tbody>
          </Table>
            } 

            {
              cart.length === 0 && 

              <div>
                <Link to='/' 
                  className='btn btn-danger' 
                  style={{
                    marginLeft: '45%',
                    marginTop: '2%'
                  }}>
                  Volver a la felicidad
                </Link>

                <div style={{textAlign: 'center', marginTop: '-3%'}}>
                  <img src={carritoVacio}/>
                </div>
              </div>
            }

            {
            cart.length !== 0 &&
              <Link to='/checkout' className='btn btn-info'> Orden de compra </Link>
            }
      </div>
    </div>
  )
}
