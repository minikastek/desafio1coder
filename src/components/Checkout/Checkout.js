import React, { useState, useContext } from 'react'
import CartContext from '../CartContext/CartContext'

import {db} from '../../service/firebase/index'
import {addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {

    const [isLoading,setisLoading] = useState(false)
    const [orderCreated,setOrderCreated] = useState(false)

    const {cart,getQuantity,getTotal,clearCart} = useContext(CartContext)

    const totalQuantity= getQuantity()
    const total = getTotal()

    const navigate = useNavigate()
    
    const createOrder = async() => {

        setisLoading (true)

        try{
            const objOrder = {
                buyer: {
                    name: 'Nico',
                    lastName: 'Olivera',
                    phone: '1237456789',
                    adress: 'Calle vereda 123'
                },
                item: cart, 
                totalQuantity, 
                total,
                date: new Date()
            }
    
        
        const ids = cart.map(prod=> prod.id)

        const productsRef= collection(db,'products')
        const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const {docs} = productsAddFromFirestore
        const outOfStock = []

        const batch = writeBatch(db)

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.Stock

            const productAddedToCart = cart.find(prod => prod.id=== doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if (stockDb>= prodQuantity) {
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0) {

            await batch.commit()

            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)

            console.log(`id de la orden : ${orderAdded.id}`)
            clearCart()
            setOrderCreated(true)
            setTimeout(()=>{
                navigate('/')
            },3000)
            
        } else {
            console.log('Productos fuera de stock')
        } 
    }   catch (error) {

        console.log(error)

    }   finally {

        setisLoading(false)
    }
}

    if(isLoading){
        return <h1> se esta generando tu orden...</h1>
    }

    if(orderCreated) {
        return <h1>asd123</h1>
    }

  return (
    <div>
        <h1>Checkout</h1>
        <h2>formulario</h2>
        <button className="btn btn-primary" onClick={createOrder}>Generar orden</button>
    </div>
  )
}
