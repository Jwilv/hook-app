import React from 'react'
import { shallow } from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Pruebas en <TodoApp />', () => { 

    const wrapper = shallow( <TodoApp />);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
 })