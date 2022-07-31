import React from 'react'
import { Counter } from '../Counter/Counter'
import './ItemDetail.css' 

export const ItemDetail = ({name,img,id,price,description,stock}) => {

  const handleOnAdd = (count) => {

    if(count > 0 ){
      console.log(`La cantidad agregada es : ${count} `)
    }
  }

  return (
    <div>

      <div className='bigBox'>

        <div className='leftBox'>

          <h1>{name}</h1>
          <img src={img}
              style={{
                width: '50%',  
              }}
          />
          <Counter stock={stock} onAdd={handleOnAdd} initial={1}/>

        </div>

        <div className='rightBox'>
          <h1>Descripcion del producto</h1>
          <p>{description}</p>
          <h1>${price}</h1>
        </div>

      </div> 
    </div>
  )
}

