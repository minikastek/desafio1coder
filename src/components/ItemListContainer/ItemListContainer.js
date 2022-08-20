import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../service/firebase'

export const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState([false])

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)

    const colectionRef = !categoryId
      ? collection (db, 'products')
      : query(collection(db,'products'), where('category', '==', categoryId))

    getDocs(colectionRef).then(response=>{

      const productAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducts(productAdapted)

    }).catch(error=>{
        console.log(error)
    }).finally(()=>{
        setLoading(false)
    })
  }, [categoryId])

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
        <h1 className='titulo'>Productos filtrado</h1>
        <ItemList products={products}/>
    </div>
  )
}
