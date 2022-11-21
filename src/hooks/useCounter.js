import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    const [value, setValue] = useState(initialValue)

    const increment = () => {
        setValue( value + 1 );
    }
    const decrement = () => {
        setValue( value - 1 )
    }
    const reset = () =>{
        setValue( initialValue )
    }

    return{
        value,
        increment,
        decrement,
        reset,
    };
}
