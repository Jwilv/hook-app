import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './estilos.css'
import { Small } from './Small'

export const Memorize = () => {
    const { value, increment } = useCounter(10);

    const [show, setShow] = useState(false)

    return (
        <>
            <h1>Counter : <Small value={value} /></h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={increment}
            >+1</button>
            <button
                className='btn btn-primary'
                onClick={() => {
                    setShow(!show)
                }}
            >show {JSON.stringify(show)}</button>
        </>
    )
}
