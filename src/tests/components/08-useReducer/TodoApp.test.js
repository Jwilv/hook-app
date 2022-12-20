import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodo } from '../../fixtures/demoTodos'

describe('Pruebas en <TodoApp />', () => {

    Storage.prototype.setItem - jest.fn( ()=>{} );

    const wrapper = shallow(<TodoApp />);
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    // test('debe de agregar un Todo', () => {
    //     const wrapper =  mount(<TodoApp />)
    //     act(() => {
    //         wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
    //         wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
    //     })

    //     expect(wrapper.find('h1').text().trim()).toBe('Tareas (2)')
    //     expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    // });

    test('debe de eliminar un todo ', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0])
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id)
        expect(wrapper.find('h1').text().trim()).toBe('Tareas (0)')
    });
})