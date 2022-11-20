import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './efectsMultipleCustomHooks.css'


export const MultipleCustomHooks = () => {

    const { loading,data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)

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
                    (<blockquote className='blockquote text-right'>
                        <p className='mb-0'>{quote}</p>
                        <footer className='blockquote'>{author}</footer>
                    </blockquote>
                    )
            }

        </>
    )
}
