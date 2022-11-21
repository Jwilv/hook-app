import React, { useCallback, useState } from 'react'
import { ButtonCounter } from './ButtonCounter'
import './estilos.css'

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    // const increment = ()=>{
    //     setCounter(counter + 1)
    // }
    const increment = useCallback(
        (num) => {
            setCounter(c => c + num)
        },
        [setCounter])

    return (
        <>
            <h1>useCallback Hook</h1>
            <hr />
            <p>{counter}</p>
            <ButtonCounter parametro={increment} />
        </>
    )
}
