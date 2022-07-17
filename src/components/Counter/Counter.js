import React from 'react'
import { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0) 
    
    // let count = 10

    const increment = () => {
        // count++;
        setCount(count+1)
    }

    const decrement = () => {
        // count++;
        setCount(count-1)
    }

  return (
    <div>
        <h1>{count}</h1>

        <button onClick={decrement}>Decrementar</button>
        <button onClick={increment}>incrementar</button>
    </div>
  )
}
