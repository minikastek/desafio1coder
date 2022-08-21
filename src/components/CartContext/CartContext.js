import React, {useState, createContext} from 'react'

const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)){
        setCart([...cart,productToAdd])
    } else {
        const cartUpdate = cart.map ( prod => {
            if(prod.id === productToAdd.id){
                const productUpdate={
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return productUpdate
            }else {
                return prod
        }
    })

        setCart(cartUpdate)
    }
  }

const clearCart = () => {
    setCart([])
}

const removeItem = (id) => {
    const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
    setCart(newCartWithoutProduct)
}

const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}

const getQuantity = () => {

    let accu = 0;
    cart.forEach(prod => {
    accu += prod.quantity
    })

    return accu
}

const getTotal = (cart) => {
    let accuTotal = 0;
    cart.map((prod) => {
      accuTotal += prod.quantity * prod.price
    })
    return accuTotal
  }


const getProductQuantity = (id) => {

    const product = cart.find(prod => prod.id === id)

    return product?.quantity
}

  return (
    <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity,getTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext