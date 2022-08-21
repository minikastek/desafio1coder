
import { db } from './index'
import { getDocs, collection, query, where } from 'firebase/firestore'

import { createAdaptedProductFromFirestore } from '../../Adapter/productAdapter'

export const getProducts = (categoryId) => {

    const collectionRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

    return getDocs(collectionRef).then(response => {

        const productsAdapted = response.docs.map(doc => {
            return createAdaptedProductFromFirestore(doc)
        })

        return productsAdapted

    }).catch(error => {return error})
}