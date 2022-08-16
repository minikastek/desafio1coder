import React, { Children } from 'react'
import { createContext, useState} from 'react'
import './Notification.css'

function Notificacion({severity,message}){

    const background = {
      success:'green',
      error:'red',
      warning: 'orange',
      default: 'blue'
    }
  
    const notificacionStyle= {
      backgroundColor: background[severity] || background.default
    }
  
    if(message === '') return

    return (
      <div style= {notificacionStyle}>
        <h1>{message}</h1>
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    
    const [message, setMessage] =useState ('mensaje inicial')
    const [severity, setSeverity] = useState ('error')

    const setNotificacion=(sev,msg) =>{
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    }

     return (
        <NotificationContext.Provider value = {{setNotificacion}}>
            <Notificacion message= { message } severity = {severity}/>
            {children}
        </NotificationContext.Provider>
    )

}
