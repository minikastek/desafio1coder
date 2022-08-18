import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import './ItemDetail.css' 
import CartContext from '../CartContext/CartContext'
import NotificationContext from '../../notification/Notification'


export const ItemDetail = ({name,img,id,price,description,stock}) => {

  const [quantity, setQuantity] = useState(0)
  const { addItem, getProductQuantity } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  const handleOnAdd = (quantity) => {

    if(quantity > 0 ){

      setQuantity(quantity)

      const producToAdd = {
        id,name,price,quantity
      }

      addItem(producToAdd)
      setNotification('success', `Se agregaron ${quantity} de ${name}`)
    }
  }

  const productQuantity = getProductQuantity(id)

  return (
    <div>
      <div className='bigBox'>

        <div className='leftBox'>
          <h1 style={{marginTop:20}}>{name}</h1>
          <img src={img}
              style={{
                width: '50%', 
                marginTop: 20,
                marginLeft: '25%' 
              }}
          />
          {
            quantity === 0 ? (
              <Counter stock={stock} onAdd={handleOnAdd} initial={productQuantity}/>
            ) : (
              <Link to='/cart' 
                className='btn btn-primary' 
                style={{
                  marginTop: 30, 
                  marginBottom: 20,
                  width: '50%', 
                  alignSelf: 'center'
                  
                }}> 
                Finalizar compra 
              </Link>
            )
          }  
        </div>

        <div className='rightBox'>
          <h1>Descripcion del producto</h1>
          <p>{description}</p>
          <h1>${price}</h1>
        </div>

      </div> 
    </div>
  )
}

