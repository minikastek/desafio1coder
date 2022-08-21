import React, { useState, useEffect } from 'react'

export const useAsync = (asyncFn, dependecies = []) => {
    
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        asyncFn().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })

    }, dependecies)

    return {
        data,
        error,
        isLoading
    }
}