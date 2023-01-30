import React from 'react'
import { CiCoffeeCup } from "react-icons/ci"
import { BsPeople } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineCoffee } from "react-icons/ai"
const Header = () => {
    const userRole = localStorage.getItem("role")
    return (
        <div className='bg-amber-100 rounded-lg flex items-center justify-between p-4'>
            <CiCoffeeCup className='text-4xl text-orange-900' />
            <div className='flex items-center justify-between gap-4'>
                <button className='text-3xl text-orange-900'><AiOutlineCoffee /></button>
                {userRole == "USER" ? <button className='text-3xl text-orange-900'><AiOutlineShoppingCart /></button> : null}
                {userRole == "USER" ? <button className='text-3xl text-orange-900'><AiOutlineHeart /></button> : null}
                {userRole == "ADMIN" ? <button className='text-3xl text-orange-900'><BsPeople /></button> : null}
                <button className='text-3xl text-orange-900'><VscAccount /></button>
            </div>
        </div>
    )
}

export default Header