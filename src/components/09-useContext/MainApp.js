import React from 'react'
// import {
//     Routes,
//     Route,
// } from 'react-router-dom'
// import { AboutScreen } from './AboutScreen'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const user = {
        name :"juan",
        id : 1234,
    }
    return (
        <UserContext.Provider value={user}>
            <AppRouter/>
        </UserContext.Provider>
    )
}
