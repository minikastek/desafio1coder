import React, { useEffect } from 'react'

export const Animation = () => {

    const [backgroundColor, setBackgroundColor] = useState('green')

    useEffect(() => {

      const div = document.getElementById('scroll-color')
      console.log(div.getBoundingClientRect())

      const { y } = div.getBoundingClientRect()
      const backgroundColor = y <= 0 ? 'green' : 'blue'

      setBackgroundColor(backgroundColor)

      return () => { window.removeEventListener('scroll', handleScroll)}

    }, [])
    
  return (
    <div>
        <div>
            <h1 id = 'scroll-color' style = {{height: '180vh', background}}>
                Scrollear para cambiar color de fondo 
            </h1>
        </div>
    </div>
  )
}
