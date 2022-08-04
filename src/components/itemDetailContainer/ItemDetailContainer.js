import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../AsyncMoc'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState();

    const {productId} = useParams();

     useEffect(() => {
         getProductsById(productId)
             .then(product => {
                 setProduct (product)
             }).catch(error =>{
                 console.log(error)
             })
     }, [])


  return (
    <div>
        <h1>Detalle</h1>
        <ItemDetail {...product}/>
    </div>
  )
}
