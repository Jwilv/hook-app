import React, { useReducer } from 'react'
import './estilos.css'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const initialSate =[{
        id: new Date().getTime(),
        desc:'Aprender React',
        done: false,
    }]

    const [ todos ] = useReducer(todoReducer,initialSate)

    console.log( todos )

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>aca estoy</li>
            </ul>
        </>
    )
}
