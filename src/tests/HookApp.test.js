import React from 'react'
import { shallow } from 'enzyme'
import { HookApp } from '../HookApp';


describe('Pruebas en <HookApp />', () => {

    const wrapper = shallow(<HookApp />);

    test('pruebas de renderizado', () => {
        expect(wrapper).toMatchSnapshot()
    });
})