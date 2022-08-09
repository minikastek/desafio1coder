import React, {useContext} from 'react'
import './CartWidget.css'
import carrito from '../../Assets/carrito.png'
import CartContext from '../CartContext/CartContext'

export const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
    <div className='container'>
        <img 
            src={carrito} 
            style={{width: 50}} 
        />
        <h6 className='contador'>{quantity}</h6>
    </div>
  )
}
