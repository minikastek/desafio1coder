import React from 'react'
import './CartWidget.css'
import carrito from '../../Assets/carrito.png'

export const CartWidget = () => {
  return (
    <div className='container'>
        <img 
            src={carrito} 
            style={{width: 50}} 
        />

        <h6 className='contador'>5</h6>
    </div>
  )
}
