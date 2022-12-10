

import { renderHook, act } from "react-hooks-testing-library";
import { useCounter } from "../../hooks/useCounter"

describe('Pruebas en el Hook useCounter ', () => {

    test('debe de retornar el valor po defecto si no se le envia parametro', () => {

        const { result } = renderHook(() => useCounter())

        expect(result.current.value).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    });

    test('debe de retornar el valor indicado', () => {

        const valor = 100

        const { result } = renderHook(() => useCounter(valor))

        expect(result.current.value).toBe(valor)
    });

    test('debe de ejecutar las funciones de la manera esperada ( increment)', () => {

        const valorInicial = 100;
        const valorEsperado = 101;

        const { result } = renderHook(() => useCounter(valorInicial))

        const { increment } = result.current;

        act(() => {
            increment();
        })

        const { value } = result.current;


        expect(value).toBe(valorEsperado)
    });
    
    test('debe de ejecutar las funciones de la manera esperada ( decrement )', () => {

        const valorInicial = 100;
        const valorEsperado = 99;

        const { result } = renderHook(() => useCounter(valorInicial))

        const { decrement } = result.current;

        act(() => {
            decrement();
        })

        const { value } = result.current;


        expect(value).toBe(valorEsperado)
    });

    test('debe de ejecutar las funciones de la manera esperada (reset)', () => {

        const valorInicial = 100;
        const valorEsperado = valorInicial;

        const { result } = renderHook(() => useCounter(valorInicial))

        const { increment, reset } = result.current;

        act(() => {
            increment();
        })
        act(() => {
            reset();
        })

        const { value } = result.current;


        expect(value).toBe(valorEsperado)
    });


})