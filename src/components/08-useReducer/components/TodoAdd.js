import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChanGet, reset] = useForm({
        description: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
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
    )
}
