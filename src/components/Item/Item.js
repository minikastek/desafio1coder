import React from "react"
import { Counter } from "../Counter/Counter"

import './Item.css'

export const Item = ({products,}) => {

    let stock = products.stock;

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
                <Counter stock={stock}/>
            </div>
        </li>
    )
}