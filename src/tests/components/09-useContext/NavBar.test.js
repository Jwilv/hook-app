import React from 'react'
import { shallow } from 'enzyme'
import { NavBar } from '../../../components/09-useContext/NavBar';

describe('pruebas en <NavBar />', () => { 

    const wrapper = shallow( <NavBar />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
 })