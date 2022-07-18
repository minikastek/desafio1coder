import React from 'react';
import { Button } from '../Button/Button';
import { CartWidget } from '../CartWidget/CartWidget';
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
            <Button handleClick={handleClick} label='Cartas'/>
            <Button label='Carpetas'/>
            <Button label='Deckbox'/> 
            <Button label='Sellados'/> 
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
