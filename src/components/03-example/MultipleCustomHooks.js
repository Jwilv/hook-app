import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './efectsMultipleCustomHooks.css'


export const MultipleCustomHooks = () => {

    const {value,increment} = useCounter(1)

    const { loading,data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${value}`)

    const {author,quote} = !!data && data[0]

    return (
        <>
            <h1>Custom Hooks!!!</h1>
            <hr />

            {
                loading
                    ?
                    (<div className='alert alert-info text-center'> loading...</div>)
                    :
                    (<>
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{quote}</p>
                        <footer className='blockquote'>{author}</footer>
                    </blockquote>
                    <button onClick={increment} className='btn btn-primary'>siguiente frase</button>
                    </>
                    )
            }

        </>
    )
}
