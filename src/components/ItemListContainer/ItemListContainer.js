import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import {getProductsDeAlfredo} from '../../AsyncMoc.js'

export const ItemListContainer = ({greetings, onAdd}) => {

  const [products, setproducts] = useState([])
  
  console.log(products)

  useEffect(() => {
    getProductsDeAlfredo().then(products => {
      setproducts(products)
    })
    
  }, [])
  
  // const productsComp = products.map(prod=> <li key={prod.id}>{prod.name}</li>)
  return (
    <div>
        <h1>{greetings}</h1>
        {/* <ul>
          {productsComp}
          {products.map(prod=> <li key={prod.id}>{prod.name}</li>)}
        </ul> */}
        <ItemList products={products} onAdd={onAdd}/>
    </div>
  )
}
