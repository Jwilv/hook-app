import React, { useEffect, useReducer } from 'react'
import { TodoList } from './components/TodoList'
import { todoReducer } from './todoReducer'
import './estilos.css'
import { TodoAdd } from './components/TodoAdd'

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (id) => {

        const action = {
            type: 'delete',
            payload: id
        }

        dispatchTodo(action)
    }

    const handleToggle = (id) => {
        dispatchTodo({
            type: 'toggle',
            payload: id
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatchTodo({
            type: 'add',
            payload: newTodo,
        });
    }

    return (
        <>
            <h1>Tareas ({todos.length})</h1>
            <hr />

            <div className='row'>

                <div className='col-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className='col-5'>

                    <TodoAdd handleAddTodo={ handleAddTodo } />

                </div>

            </div>
        </>
    )
}
