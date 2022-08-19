import React,{useContext} from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import './Navbar.css';
import name from "../../Assets/Name.png";
import CartContext from '../CartContext/CartContext'

export const Navbar = () => {

    const {cart} = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <div className="navbar-brand" style={{paddingLeft: 10}}>
            <Link to="/">
                <img src={name} className="logo"/>
            </Link>
        </div>

        <div className="buttonList">
            <Link to='/category/carta'>
                <button className="btn btn-outline-light btn-sm">Singles</button>
            </Link>
            <Link to='/category/carpeta'>
                <button className="btn btn-outline-light btn-sm">Carpetas</button>
            </Link>
            <Link to='/category/deckbox'>
                <button className="btn btn-outline-light btn-sm">Deckbox</button>
            </Link>
            {/* <Link to='/category/sealed'>
                <button>Sellado</button>
            </Link> */}
        </div>

        <div>
            <CartWidget/>
        </div>


        {/* <div>
            <button 
                className='btn btn-primary'
                style={{margin: 10, padding: 9}}
            >
                login
            </button>

            <button 
                className='btn btn-primary'
                style={{margin: 10, padding: 9}}
            >
                sign In
            </button>
        </div> */}

    </nav>
  )
}
