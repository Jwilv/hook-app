import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'


export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomeScreen />}/>
                <Route path='/about' element={<AboutScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='*' element={<h1>404 alla la ponen en 4</h1>} />
                
            </Routes>
        </>
    )
}
