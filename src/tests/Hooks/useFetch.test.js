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

    test('debe de retornar los de manera correcta (loadin:false, error:null) ', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        
        expect(error).toBe(null);
        expect(loading).toBe(false);
        expect( data.length ).toBe(1)

    });

    test('debe de manejar el error de la forma indicada', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'))
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe('no se pudo cargar');

    });
})