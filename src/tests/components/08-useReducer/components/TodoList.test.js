import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from '../../../../components/08-useReducer/components/TodoList';
import { demoTodo } from '../../../fixtures/demoTodos';


describe('pruebas en el componente <TodoList />', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(<TodoList
        todos={demoTodo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
    />)

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de renderizar todos los todo <TodoListItem /> ', () => {
        expect(wrapper.find("TodoListItem").length).toBe(demoTodo.length)

    });

    test('se debe de enviar 2 funciones handleToggle /  handleDelete', () => {
        expect(wrapper.find("TodoListItem").at(0).prop('handleToggle')).toEqual( expect.any(Function) )
        expect(wrapper.find("TodoListItem").at(0).prop('handleDelete')).toEqual( expect.any(Function) )
    });
})