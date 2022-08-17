import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { Table } from "react-bootstrap";
import CartContext from '../CartContext/CartContext'

export const CartContainer = () => {

  const { cart,removeItem,clearCart  } = useContext(CartContext);

  const totalProd = (quantity,price) => {
    let accu = 0;
    accu = quantity * price;
    return accu
  }

  const total = (cart) => {
    let accuTotal = 0;
    cart.map((prod) => {
      accuTotal += prod.quantity * prod.price
    })
    console.log(accuTotal)
    return accuTotal
  }

  return (
    <div>

      <div>
        <h1>Listado de productos en tu carrito</h1>
      </div>

      <div>
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
              <tr>
                <td>{prod.name}</td>
                <td>{prod.quantity}</td>
                <td>${prod.price}</td>
                <td>${totalProd(prod.quantity,prod.price)}</td>
                <td><button className='btn btn-info' >Editar Cantidad</button></td>
                <td><button className='btn btn-danger' id={prod.id} onClick={() => removeItem(prod.id) }  >Eliminar</button></td>
              </tr>
            ))}

            {cart.length !== 0 &&
              <tr>
                <td>Suma total</td>
                <td></td>
                <td>$ {total(cart)}</td>
                <td></td>
                <td></td>
                <td><button className='btn btn-danger' onClick={() => clearCart() } >Eliminar Todo</button></td>
              </tr>
            } 

            {
              cart.length === 0 && <button className='btn btn-danger' >No tenes nada, ANDA A COMPRAR</button>
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
