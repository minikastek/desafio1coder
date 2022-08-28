import React,{useContext} from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import './Navbar.css';
import name from "../../Assets/Name.png";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <div className="navbar-brand" style={{paddingLeft: 10}}>
            <Link to="/">
                <img src={name} className="logo"/>
            </Link>
        </div>

        <div className="buttonList">
            <Link to='/category/carta'>
                <button className="btn btn-outline-light btn-sm button">Singles</button>
            </Link>
            <Link to='/category/carpeta'>
                <button className="btn btn-outline-light btn-sm button">Carpetas</button>
            </Link>
            <Link to='/category/deckbox'>
                <button className="btn btn-outline-light btn-sm button">Deckbox</button>
            </Link>
        </div>

        <div>
            <CartWidget/>
        </div>
    </nav>
  )
}
