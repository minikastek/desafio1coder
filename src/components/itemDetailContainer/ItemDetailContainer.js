import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../../service/firebase'

export const ItemDetailContainer = ({greetings}) => {

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
      
     }, [productId])

     if(loading){
        return (
        <div>  
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </div> 
        )
      }

  return (
    <div>
        <h1 className='titulo'>{greetings}</h1>
        <ItemDetail {...product}/>
    </div>
  )
}
