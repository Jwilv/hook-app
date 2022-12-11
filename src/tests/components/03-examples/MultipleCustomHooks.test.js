import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-example/MultipleCustomHooks';



describe('pruebas en <MultipleCustomHooks /> ', () => { 

    test('debe de renderizarse correctamente ', () => {
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    });
 })