import React, { useEffect, useState } from 'react'
import './efects.css'


export const SimpleForm = () => {

    useEffect( () => {
        console.log('se ejecuta una sola vez')
    }, [])

    const [stateForm, setStateForm] = useState({
        emial: '',
        name: '',
    })

    const { emial, name } = stateForm

    const handleInputChange = ({ target }) => {
        setStateForm({
            ...stateForm,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    autoComplete='off'
                    placeholder='tu nombre'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    autoComplete='off'
                    placeholder='email@email.com'
                    value={emial}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

