import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from '../../fixtures/demoTodos'

const newTodo = {
    id: 777,
    name: 'vegetta777',
    rol: 'yt',
}

describe('pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demoTodo, {});
        expect(state).toEqual(demoTodo)
    });

    test('debe de agregar un todo', () => {
        const state = todoReducer(demoTodo, {
            type: "add",
            payload: newTodo,
        });

        expect(state.length).toBe(3)
        expect(state).toEqual([...demoTodo, newTodo])
    });

    test('se debe de borrar un todo ', () => {
        const state = todoReducer(demoTodo, {
            type: 'delete',
            payload: 1,
        });

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodo[1]]);
    });

    test('se debe modificar el done de un todo ', () => {
        const state = todoReducer(demoTodo, {
            type: 'toggle',
            payload: 1,
        });

        expect(state[0].done).toBe(true)
        expect(state[1]).toEqual(demoTodo[1]);
    });
})