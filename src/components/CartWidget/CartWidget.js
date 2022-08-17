import React, {useContext} from 'react'
import './CartWidget.css'
import carrito from '../../Assets/carrito.png'
import CartContext from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
    <div className='container'>
      <Link to='/cart'>
        <img 
            src={carrito} 
            style={{width: 50}} 
        />
      </Link>
      <h6 className='contador'>{quantity}</h6>
    </div>
  )
}