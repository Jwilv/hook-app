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

    test('debe de tener 2 <TodoListItem /> ', () => {
        
    });
})