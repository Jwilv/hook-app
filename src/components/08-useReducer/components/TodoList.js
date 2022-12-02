import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleToggle,handleDelete}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    <TodoListItem todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle}/>
                ))
            }
        </ul>
    )
}