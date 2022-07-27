import React from 'react'
import { useState } from 'react'
import './Counter.css'

export const Counter = ({stock, onAdd, initial}) => {

    const [count, setCount] = useState(initial)

    // const [title, setTitle] = useState('hola')

    // useEffect(() => {
    //   console.log('el componente se termino de montar')

    //   return () => console.log('Se desmonto el componente')
    // }, [])

    // useEffect(() => {
    //   console.log('el titulo cambio')
    // }, [title])
    
    // let count = 10

    const increment = () => {
        // count++;
        if(count<stock){
          setCount(count+1)
        }
    }

    const decrement = () => {
      // count--;
      if(count>0){
        setCount(count-1)
      }
    }

  return (
    <div>

      <div className='counter'>
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
      </div>

        <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}
