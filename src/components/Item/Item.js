import React from "react"
import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({products}) => {

    return (
        <li>
            <div className="box">
                <div className="Header">
                    <h3 className="title">{products.name}</h3>
                </div>
                <div className="imgContainer">
                    <img 
                        src={products.img} 
                        alt={products.name}
                        style={{
                            width: 170,
                            alignItems: 'center',
                        }}
                        className="imgItem"
                    />
                </div>
                <div className="others">
                    <h3>$ {products.price}</h3>
                    <Link to={`/item/${products.id}`}>
                        <button className="btn btn-secondary">Ver detalle</button>
                    </Link>
                </div>
            </div>
        </li>
    )
}