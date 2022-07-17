import React from 'react'

import './Button.css';

export const Button = ({handleClick,label}) => {
  return (
    <button 
      onClick={handleClick}
      className="btn btn-outline-light btn-sm"
      style={{
        borderRadius: 6, 
        marginLeft: 5, 
        padding: 10,}}
    >
      {label}
    </button>
  )
}
