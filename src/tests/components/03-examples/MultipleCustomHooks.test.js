import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-example/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch')



describe('pruebas en <MultipleCustomHooks /> ', () => { 

    test('debe de renderizarse correctamente ', () => {

        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null,
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    });
 })