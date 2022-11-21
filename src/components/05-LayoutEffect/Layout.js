import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './estilos.css'


export const Layout = () => {

    const pTag = useRef()

    const { state, increment } = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

    const [boxSize, setBoxsize] = useState( {} )

    const { quote } = !!data && data[0]

    useLayoutEffect(() => {
        setBoxsize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className='blockquote text-right'>
                <p 
                className='mb-0'
                ref={pTag}
                >{quote}</p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button onClick={increment} className='btn btn-primary'>siguiente frase</button>
        </>
    )
}
