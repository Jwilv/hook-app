const { renderHook } = require("react-hooks-testing-library");
const { useFetch } = require("../../hooks/useFetch");


describe('pruebas en el hook useFetch', () => {

    test('debe de retornar los valores por defecto ', () => {

        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });
})