import React, { useEffect, useState } from 'react'


export const ml = () => {

    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    // useEffect(() => {
    //   fetch('https://api.mercadolibre.com/sites/MLA/search?q=auto')
    //     .then(response=> response.json())
    //     .then(json =>{
    //         setProducts(json.results)
    //     })
    // }, [])

    const handleOnSubmit = (e) => {
        e.prevenDefault()
        setLoading(true)
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=${input}')
            .then(response => response.json)
            .then(json=>{
                setProducts(json.results)
                setLoading(false)
            }).catch(error=>{
                console.log(error)
            }).finally(() =>{
                setLoading(false)
            })
    }
    
    if(loading){
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>MercadoLibre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e)=> setInput.e.target.value}/>
                <button type='submit'>buscar</button>
            </form>
            <div>
            {
                products.map( prod=> {
                    return(
                        <div key={prod.id}>
                            <p>{prod.title}</p>
                            <img src={prud.thumbnail} alt= {prod.title}/>
                        </div>
                    )
                })

            }
            </div>
        </div>
    )
}
