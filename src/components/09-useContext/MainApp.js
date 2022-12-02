import React from 'react'
// import {
//     Routes,
//     Route,
// } from 'react-router-dom'
// import { AboutScreen } from './AboutScreen'
import { AppRouter } from './AppRouter'

export const MainApp = () => {
    return (
        <div>
            {/* <Routes>
                <Route path='/about' element={<AboutScreen />} />
            </Routes> */}
            <AppRouter/>
        </div>
    )
}
