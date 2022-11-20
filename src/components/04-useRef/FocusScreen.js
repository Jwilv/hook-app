import React, { useRef } from 'react'
import './estilos.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = ()=>{
    //document.querySelector('input').select();
    inputRef.current.select();
    }


    return (
        <>
        <h1>Focus Screen</h1>
        <hr/>
        <input
        ref={inputRef}
        className='form-control'
        placeholder='su nombre'
        /> 
        <button
        onClick={handleClick} 
        className='btn btn-primary'
        >Focus</button>
        </>
    )
}
