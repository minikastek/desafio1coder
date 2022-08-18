import React from 'react'
import { createContext, useState} from 'react'

function Notificacion({severity,message}){

    const background = {
      success:'green',
      error:'red',
      warning: 'orange',
      default: 'blue'
    }
  
    const notificacionStyle= {
      position: 'absolute',
      top: 100,
      right: 10,
      padding: '10px 20px 10px 20px',
      borderRadius: '10px 10px 10px 10px',
      color: 'white',
      backgroundColor: background[severity] || background.default
    }
  
    if(message === '') return

    return (
      <div style={notificacionStyle}>
        <h1>{message}</h1>
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    
    const [message, setMessage] = useState ('')
    const [severity, setSeverity] = useState ('success')

    const setNotification=(sev,msg) =>{
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    }

     return (
        <NotificationContext.Provider value = {{setNotification}}>
            <Notificacion message= { message } severity = {severity}/>
            {children}
        </NotificationContext.Provider>
    )

}

export default NotificationContext;
