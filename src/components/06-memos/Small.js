import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('hola')
  return (
    <small>{value}</small>
  )
})
