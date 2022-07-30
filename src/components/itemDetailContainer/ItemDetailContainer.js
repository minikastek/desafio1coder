import React, { useEffect, useState } from 'react'
import { getProductsById, getProductsByCategory, getProductsDeAlfredo } from '../../AsyncMoc'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState();

    // const {productId} = useParams();
    const {categoryId} = useParams();

    // useEffect(() => {
    //     getProductsById(productId)
    //         .then(product => {
    //             setProduct (product)
    //         }).catch(error =>{
    //             console.log(error)
    //         })
    // }, [])

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory: getProductsDeAlfredo
    }, [])
    
  return (
    <div>
        <h1>Detalle</h1>
        <ItemDetail {...product}/>
    </div>
  )
}
