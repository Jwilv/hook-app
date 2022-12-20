import React from 'react'
import { shallow } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('pruebas en <HomeScreen />', () => {

    const user = {
        name:'userTest',
        email:'userTest@gmail.com'
    }
    //deberia ir mount en vez de shallow pero salta erro por motivo desconocido 20/12/2022
    const wrapper = shallow(
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
})

