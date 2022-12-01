import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './estilos.css'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const init = ()=> {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, []  ,init)

    const [{ description }, handleInputChanGet,reset] = useForm({
        description: ''
    })

    useEffect( ()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleDelete = (id)=>{

        const action = {
            type:'delete',
            payload: id
        }

        dispatchTodo(action)
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatchTodo(action);
        reset();
    }

    return (
        <>
            <h1>Tareas ({todos.length})</h1>
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
                                        onClick={ () =>handleDelete(todos.id) }
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className='col-5'>

                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='description'
                            placeholder='Incluir...'
                            autoComplete='off'
                            className='form-control'
                            value={description}
                            onChange={handleInputChanGet}
                        />
                        <button
                            type='submit'
                            className='btn btn-block btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>

                </div>

            </div>
        </>
    )
}
