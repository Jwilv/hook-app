import React from 'react';
import { shallow } from 'enzyme'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('pruebas en el componente <RealExampleRef />', () => { 

    test('debe de mostrarse correctamente ', () => {
        const wrapper = shallow( <RealExampleRef />)
        expect(wrapper).toMatchSnapshot();
    });

    test('no deberia de mostrarse el componente <RealExampleRef /> ', () => {
        const wrapper = shallow( <RealExampleRef />)
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false )
    });

    test('debe de mostrarse el componente <RealExampleRef /> ', () => {
        const wrapper = shallow( <RealExampleRef />)
        wrapper.find('button').simulate('click')
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true )
    });
 })