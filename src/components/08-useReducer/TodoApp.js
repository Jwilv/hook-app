import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './estilos.css'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const init = ()=> {
        return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,
    }]}

    const [todos, dispatchTodo] = useReducer(todoReducer, []  ,init)

    const [{ description }, handleInputChanGet,reset] = useForm({
        description: ''
    })

    useEffect( ()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    console.log(todos)

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

                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='description'
                            placeholder='aprender ...'
                            autoComplete='off'
                            className='form-control'
                            value={description}
                            onChange={handleInputChanGet}
                        />
                        <button
                            type='submit'
                            className='btn btn-block btn-outline-primary mt-1 btn-block'
                        >
                            agreagar
                        </button>
                    </form>

                </div>

            </div>
        </>
    )
}
