import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    const {user,setUser} = useContext(UserContext)
    const handlelimpiar = ()=>{
        setUser({})
    }
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <h2>{JSON.stringify(user,null,4)}</h2>
            <button
            className='btn btn-primary'
            onClick={ ()=>{
                setUser({...user,nombrePadre:'pedro paramo'})
            }}>
                Agregar al padre
            </button>
            <button
            className='btn btn-primary'
            onClick={ handlelimpiar }>
                limpiar
            </button>
        </div>
    )
}
