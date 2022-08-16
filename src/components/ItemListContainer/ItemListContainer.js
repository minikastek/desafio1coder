import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
// import {getProductsDeAlfredo, getProductsByCategory} from '../../AsyncMoc.js'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../service/firebase'

export const ItemListContainer = ({greetings}) => {

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

    // const asyncFunction = categoryId ? getProductsByCategory : getProductsDeAlfredo

    // asyncFunction(categoryId).then(product=>{
    //     setProducts(product)
    //     setLoading(false)
    //   }).catch(error=>{
    //     console.log(error)
    //   })
  }, [categoryId])

  if(loading){
    return <h1>Cargando productos...</h1>
  }

  return (
    <div>
        <h1>{greetings}</h1>
        <ItemList products={products}/>
    </div>
  )
}
