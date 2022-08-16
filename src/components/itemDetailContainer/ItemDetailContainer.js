import React, { useEffect, useState } from 'react'
// import { getProductsById } from '../../AsyncMoc'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../../service/firebase'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const {productId} = useParams();

     useEffect(() => {
        setLoading(true)

        getDoc(doc(db,'products',productId)).then(response =>{
            const data=response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
      
        //  getProductsById(productId)
        //      .then(product => {
        //          setProduct (product)
        //      }).catch(error =>{
        //          console.log(error)
        //      })
     }, [productId])

     if(loading){
        return <h1>Cargando producto...</h1>
      }

  return (
    <div>
        <h1>Detalle</h1>
        <ItemDetail {...product}/>
    </div>
  )
}
