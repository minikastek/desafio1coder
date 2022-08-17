import React from 'react'
import { useState, useEffect } from 'react'
import './Counter.css'

export const Counter = ({stock = 0, initial = 1, onAdd}) => {

    const [count, setCount] = useState(initial)

    useEffect(() => {
      setCount(initial)
    }, [initial])
    
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
      <div className='counter'style={{margin: 40}}>
        <button onClick={decrement} className="btn btn-secondary" >-</button>        
        <h1>{count}</h1>
        <button onClick={increment} className="btn btn-secondary" >+</button>
      </div>

      <button onClick={()=> onAdd(count)} className="btn btn-success" style={{marginBottom: 40}}>Agregar al carrito</button>
    </div>
  )
}
