import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import {getProductsDeAlfredo, getProductsByCategory} from '../../AsyncMoc.js'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greetings}) => {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProductsDeAlfredo

    asyncFunction(categoryId).then(product=>{
        setProducts(product)
      }).catch(error=>{
        console.log(error)
      })
  }, [categoryId])
  
  // const productsComp = products.map(prod=> <li key={prod.id}>{prod.name}</li>)

  return (
    <div>
        <h1>{greetings}</h1>
        <ItemList products={products}/>
    </div>
  )
}
