import React from 'react'

import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    <ul className='list'>
        {products.map(prod=> <Item key={prod.id} products={prod}/>)}
    </ul>
  )
}
