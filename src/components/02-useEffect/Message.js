import React, { useEffect } from 'react'

export const Message = () => {
    useEffect( () => {
        console.log('componente montado')

        return () => {
            console.log('componente desmontado')
        }
    }, [])

    return (
        <>
            <h1>eres genial</h1>
        </>
    )
}
