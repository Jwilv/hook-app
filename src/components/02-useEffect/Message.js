import React, { useEffect } from 'react'

export const Message = () => {
    useEffect( () => {
        console.log('componente montado')
        //funcion que se ejecuta sola la primera vez que se renderizaz el componente, debido al []

        return () => {
            console.log('componente desmontado')
            //aca se deberia usar un remove que desabilite la funcion anterior
        }
    }, [])

    return (
        <>
            <h1>eres genial</h1>
        </>
    )
}
