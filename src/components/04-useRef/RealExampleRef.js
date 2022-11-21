import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks'
import './estilos.css'

export const RealExampleRef = () => {

  const [show, setShow] = useState(false)
  return (
    <>
    <h1>Real Example Ref</h1>
    <hr/>
    { show && <MultipleCustomHooks />}
    <button 
    className='btn btn-primary'
    onClick={ () => setShow(!show)}
    >ver/ocultar</button>
    </>
  )
}
