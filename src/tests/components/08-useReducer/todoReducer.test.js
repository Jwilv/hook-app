import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import {demoTodo} from '../../fixtures/demoTodos'

const newTodo = {
    id:777,
    name:'vegetta777',
    rol:'yt',
}

describe('pruebas en todoReducer', () => { 

    test('debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demoTodo ,{});
        expect( state ).toEqual( demoTodo )
    });

    test('debe de agregar un todo', () => {
        const state = todoReducer(demoTodo ,{
            type:"add",
            payload:newTodo,
        });
        
        expect( state.length ).toBe( 3 )
        expect( state ).toEqual( [...demoTodo, newTodo] )
    });
 })