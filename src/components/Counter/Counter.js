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
      <div className='counter'>
        <button onClick={decrement} className="btn btn-secondary" style={{marginLeft: 40}}>-</button>        
        <h1>{count}</h1>
        <button onClick={increment} className="btn btn-secondary" style={{marginRight: 40}}>+</button>
      </div>

        <button onClick={()=> onAdd(count)} className="btn btn-success">Agregar al carrito</button>
    </div>
  )
}
