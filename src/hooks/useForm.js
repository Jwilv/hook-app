import { useState } from "react"


export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChanget = ({ target }) => {
        
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return {values, handleInputChanget };
}
