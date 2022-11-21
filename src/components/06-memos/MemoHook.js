import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import './estilos.css'

export const MemoHook = () => {
    const { value, increment } = useCounter(5000);

    const [show, setShow] = useState(false)

    

    const memoProces =   useMemo(() => procesoPesado(value), [value])

    return (
        <>
            <h3>Counter : <small>{value}</small> </h3>
            <hr />
            <p>{memoProces}</p>
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
