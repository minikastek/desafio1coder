import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import './Checkout.css'

import {db} from '../../service/firebase/index'
import {addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import CartContext from '../CartContext/CartContext'
import NotificationContext from '../../notification/Notification'
import { buyerSchema } from '../../Schemas/buyerSchema'


export const Checkout = () => {
    
    const [isLoading,setisLoading] = useState(false)
    const [orderCreated,setOrderCreated] = useState(false)

    const { setNotification } = useContext(NotificationContext)

    const {cart,getQuantity,getTotal,clearCart} = useContext(CartContext)

    const totalQuantity= getQuantity()
    const total = getTotal()
    
    const navigate = useNavigate()

    const createOrder = async (values) => {

        setisLoading (true)
        
         try{
            const objOrder = {
                buyer: values,
                items: cart, 
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
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if(stockDb >= prodQuantity) {
              batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
              outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

         if(outOfStock.length === 0) {

            await batch.commit()

            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)

            setNotification('success', `Se genero la orden con el ID : ${orderAdded.id}`)

            clearCart()
            setOrderCreated(true)
             setTimeout(()=>{
                 navigate('/')
             },3000)
            
        } else {

          setNotification('error', `Hay un item que no esta es stock`)

        } 
    }   catch (error) {

       console.log(error)

     }   finally {

         setisLoading(false)
     }
 }
     if(isLoading){
         return (
         <div>
            <h1 className='title'> se esta generando tu orden...</h1>  
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </div> 
        )
     }

     if(orderCreated) {
         return (
          <div>
            <h1 className='title'>Se creo la orden</h1>
            <p></p>
          </div>
         )
     }

  return (
    <div>
        <h1 className='title'>Formulario para envio</h1>

        <Formik
          initialValues={{
            name: '',
            lastName: '',
            dni:'' ,
            province: '',
            city: '',
            postalCode: '',
            adress: '',
            phone: '',
          }}
          onSubmit={(values)=>{
            createOrder(values)
          }}
          validationSchema={buyerSchema}
        >
        
        {({values, errors, touched, handleChange, handleSubmit})=>(

        <Form className="px-5" onSubmit={handleSubmit} autoComplete="off">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombres</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese nombres" 
                  value={values.name}
			            onChange={handleChange}
                />
              </Form.Group>
              {errors.name && touched.name && <p className="alert alert-danger">{errors.name}</p>}
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese apellidos"
                  value={values.lastName}
				          onChange={handleChange}
                />
                {errors.lastName && touched.lastName && <p className="alert alert-danger">{errors.lastName}</p>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dni">
                <Form.Label>DNI</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Ingrese DNI"
                  value={values.dni}
				          onChange={handleChange}
                />
                {errors.dni && touched.dni && <p className="alert alert-danger">{errors.dni}</p>} 
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Ingrese Telefono" 
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone && <p className="alert alert-danger">{errors.phone}</p>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="province">
                <Form.Label>Provincia</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese Provincia"
                  value={values.province}
			            onChange={handleChange} 
                />
                {errors.province && touched.province && <p className="alert alert-danger">{errors.province}</p>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>Localidad</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese localidad"
                  value={values.city}
			            onChange={handleChange}
                />
                {errors.city && touched.city && <p className="alert alert-danger">{errors.city}</p>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="postalCode">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Ingrese Codigo Postal"
                  value={values.postalCode}
			    			  onChange={handleChange}
                />
                {errors.postalCode && touched.postalCode && <p className="alert alert-danger">{errors.postalCode}</p>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="adress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese Dirección" 
                  value={values.adress}
                  onChange={handleChange}
                />
                {errors.adress && touched.adress && <p className="alert alert-danger">{errors.adress}</p>} 
              </Form.Group>
            </Col>
          </Row>

          <div className='footer'>
            <button className="btn btn-success" type="submit" >Generar orden</button>
          </div>
          
        </Form>
      )}
      </Formik>   
    </div>
  )
}
