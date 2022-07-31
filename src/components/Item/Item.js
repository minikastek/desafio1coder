import React from "react"
import { Link } from "react-router-dom";
import { Counter } from "../Counter/Counter"

import './Item.css'

export const Item = ({products}) => {

    let stock = products.stock;

    const handleOnAdd = (count) => {

        if(count > 0 ){
          console.log(`La cantidad agregada es : ${count} `)
        }
      }

    return (
        <li>
            <div className="box">
                <h3 className="title">{products.name}</h3>
                <img 
                    src={products.img} 
                    alt={products.name}
                    style={{
                        width: 170,
                        alignItems: 'center',
                    }}
                />
                <h3>$ {products.price}</h3>
                <Link to={`/item/${products.id}`}>Ver detalle</Link>
                {/* <Counter stock={stock} onAdd={handleOnAdd} initial={1}/> */}
                {/* <link to='/detail'>Ver Detalle</link>  */}
            </div>
        </li>
    )
}