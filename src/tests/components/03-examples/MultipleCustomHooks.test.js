import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-example/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch')



describe('pruebas en <MultipleCustomHooks /> ', () => {

    test('debe de renderizarse correctamente ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data: [{
                author:'messi',
                quote:'anda pa ya bobo'
            }],
            loading: false,
            error: null,
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').exists() ).toBe( true );
        expect( wrapper.find('footer').text().trim() ).toBe( 'messi' );

    });
})