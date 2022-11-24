import React, { useReducer } from 'react'
import './estilos.css'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const initialSate = [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,
    }]

    const [todos] = useReducer(todoReducer, initialSate)

    console.log(todos)

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todos, i) => (
                                <li
                                    key={todos.id}
                                    className='list-group-item'
                                >
                                    <p className='text-center'>{i + 1}. {todos.desc}</p>
                                    <button
                                        className='btn btn-danger'
                                    >
                                        borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className='col-5'>
                    <h4>Agregar todo</h4>
                    <hr />

                    <form>
                        <input
                            type='text'
                            name='description'
                            placeholder='aprender ...'
                            autoComplete='off'
                            className='form-control'
                        />
                    </form>
                    <button
                        className='btn btn-block btn-outline-primary mt-1 btn-block'
                    >
                        agreagar
                    </button>
                </div>

            </div>
        </>
    )
}
