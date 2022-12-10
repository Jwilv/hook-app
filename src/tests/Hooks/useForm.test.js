import { renderHook, act } from "react-hooks-testing-library";
import { useForm } from "../../hooks/useForm";




describe('Pruebas en useForm', () => {

    const target = {
        name: 'juan',
    }

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(target))
        const [values] = result.current
        expect(values).toEqual(target)
    });

    test('debe de cambiar el valor del formulario', () => {
        const { result } = renderHook(() => useForm(target))

        const [, handleInputChanGet] = result.current

        act(() => {
            handleInputChanGet({
                target: {
                    name: 'name',
                    value: 'ignacio'
                }
            })
        })

        const [values] = result.current

        expect(values).toEqual({ ...values, name: 'ignacio' })
    });

    test('debe de re-establecer el formulario con RESET', () => {

        const { result } = renderHook(() => useForm(target))

        const [, handleInputChanGet, reset] = result.current

        act(() => {
            handleInputChanGet({
                target: {
                    name: 'name',
                    value: 'ignacio'
                }
            })
            reset();
        })

        const [values] = result.current

        expect(values).toEqual(target)
    });
})