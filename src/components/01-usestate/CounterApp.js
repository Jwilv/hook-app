import React, { useState } from 'react'
import './counterApp.css'

export const CounterApp = () => {
    const [ state, setState] = useState({
        counter1: 20,
        counter2: 30,
        counter3: 50,
        counter4: 80,
    })
    const {counter1,counter2} = state
    return (
        <>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>
            <hr />
            <button className='btn btn-primary'
                onClick={() => {
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    })
                }} >
                +1
            </button>
        </>
    )
}
