
import React from 'react'
import './counterApp.css'

export const CounterWithCoustomHook = () => {
    return (
        <>
            <h1>Counter With Coustom Hook: {0}</h1>
            <hr/>
            
            <button className='btn btn-primary'>+1</button>
            <button className='btn btn-primary'>-1</button>
        </>
    )
}
