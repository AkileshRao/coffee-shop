import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const Main = () => {
    return (
        <div className='p-4'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Main