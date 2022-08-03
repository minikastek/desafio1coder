import React from 'react';
import { Button } from '../Button/Button';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import './Navbar.css';
import name from "../../Assets/Name.png";

export const Navbar = () => {

    const text = 'hice click'
    const handleClick= () =>{
        return console.log(text);
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <div className="navbar-brand" style={{paddingLeft: 10}}>
            <Link to="/">
                <img src={name} className="logo"/>
            </Link>
        </div>

        <div className="buttonList">
            <Link to='/category/cartas'>
                <button className="btn btn-outline-light btn-sm">Singles</button>
            </Link>
            <Link to='/category/carpetas'>
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
