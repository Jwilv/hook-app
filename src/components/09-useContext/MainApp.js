import React, { useState } from 'react'
// import {
//     Routes,
//     Route,
// } from 'react-router-dom'
// import { AboutScreen } from './AboutScreen'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const [user, setUser] = useState({})
    return (
        <UserContext.Provider value={ {
            user,
            setUser
        } }>
            <AppRouter />
        </UserContext.Provider>
    )
}
