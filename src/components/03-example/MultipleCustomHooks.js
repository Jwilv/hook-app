import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './efectsMultipleCustomHooks.css'


export const MultipleCustomHooks = () => {

        const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
        console.log(state)

    return (
        <>
            <h1>Custom Hooks!!!</h1>
        </>
    )
}
