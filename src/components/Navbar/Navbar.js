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
            <img src={name} className="logo"/>
        </div>

        <div className="buttonList">
            <Link to='/category/singles' handleClick={handleClick}className='btn btn-primary'>Singles</Link>
            <Link to='/category/carpetas' className='btn btn-primary'>Carpetas</Link>
            <Link to='/category/deckbox' className='btn btn-primary'>Deckbox</Link>
            <Link to='/category/sealed' className='btn btn-primary'>Sellado</Link>
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
