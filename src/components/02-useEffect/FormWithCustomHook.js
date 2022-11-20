import React from 'react'
import { useForm } from '../../hooks/useForm'
import './efects.css'

export const FormWithCustomHook = () => {

    const { values, handleInputChanget } = useForm({
        email: '',
        name: '',
    });

    const { emial, name } = values

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(values)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>FormWithCustomHook</h1>
                <hr />
                <div className='form-group'>
                    <input
                        type='text'
                        name='name'
                        className='form-control'
                        autoComplete='off'
                        placeholder='tu nombre'
                        value={name}
                        onChange={handleInputChanget}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        name='email'
                        className='form-control'
                        autoComplete='off'
                        placeholder='email@gmail.com'
                        value={emial}
                        onChange={handleInputChanget}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>guardar</button>
            </form>
        </>
    )
}

