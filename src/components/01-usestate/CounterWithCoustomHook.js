
import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counterApp.css'

export const CounterWithCoustomHook = () => {
    const {state:counter,decrement,increment} = useCounter(100);
    return (
        <>
            <h1>Counter With Coustom Hook: {counter}</h1>
            <hr/>
            
            <button onClick={ () => increment(1) } className='btn btn-primary'>+1</button>
            <button onClick={ () => decrement(1) } className='btn btn-primary'>-1</button>
        </>
    )
}
