import React from 'react';
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../../components/08-useReducer/components/TodoListItem';
import { demoTodo } from '../../../fixtures/demoTodos';


describe('test em el componente <TodoListItem />', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();


    const wrapper = shallow(<TodoListItem 
        todo={demoTodo[0]}
        i={0}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        />)


    test('debe de mostrarse corectamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {
        
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith(demoTodo[0].id);

    });

    test('debe de llamar la funcion handleToggle', () => {
        
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith(demoTodo[0].id);

    });

    test('debe de mostrar el texto corectamente', () => {

        expect(wrapper.find('p').text()).toBe(`1. ${demoTodo[0].desc}`)
    });
})