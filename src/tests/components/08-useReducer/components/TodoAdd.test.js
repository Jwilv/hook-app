import React from 'react'
import { shallow } from 'enzyme'
import { TodoAdd } from '../../../../components/08-useReducer/components/TodoAdd';


describe('pruebas en <TodoAdd />', () => { 

    const handleAddTodo = jest.fn();

    const wrapper = shallow( <TodoAdd 
        handleAddTodo={handleAddTodo}/> );

    test('debe de mostrarse corectamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('NO debe de llamar a handleAddTodo', () => {
        //una manera nueva de simular el evento
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit( {preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar a la funcion handleAddTodo', () => {
        const value = 'si se pudo'
        wrapper.find('input').simulate('change',{
            target:{
                value,
                name : 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit( {preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object));
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            id: expect.any(Number),
            desc: value,
            done: false,
        });

        //luego del submit se debe ejecutar el reset
        expect( wrapper.find('input').prop('value')).toBe('')
    });
    
 })