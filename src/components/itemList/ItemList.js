import React, {memo} from 'react'

import { Item } from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <ul className='list ListOfProducts'>
      {products.map(prod=> <Item key={prod.id} products={prod}/>)}
    </ul>
  )
}

export default memo(ItemList)
