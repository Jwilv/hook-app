import React from 'react'

export const ButtonCounter = React.memo(({parametro}) => {
    console.log('me volvi a generar')
    return (
        <button
            className='btn btn-primary'
            onClick={ ()=>{
                parametro(5)
            }}>increment</button>
    )
})
