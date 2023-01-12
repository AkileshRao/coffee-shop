import React from 'react'
import { useState } from 'react'

const Auth = () => {
    const [authState, setAuthState] = useState("login")

    const toggleState = () => {
        authState == "login" ? setAuthState("register") : setAuthState("login")
    }

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <form className='flex flex-col w-4/12 gap-4' onSubmit={submit}>
                <p className='font-bold text-3xl'>{authState == "login" ? "Login" : "Register"} </p>
                <input className="border-2 border-inidigo-500 p-2 rounded-md" type="text" placeholder="Enter username" />
                {authState == "register" && <input className="border-2 border-inidigo-500 p-2 rounded-md" type="text" placeholder="Enter email" />}
                {authState == "register" && <input className='border-2 border-inidigo-500 p-2 rounded-md' type="password" placeholder="Enter password" />}
                <input className='border-2 border-inidigo-500 p-2 rounded-md' type="password" placeholder="Confirm password" />
                <p className='m-4 hover:underline cursor-pointer text-indigo-500' onClick={toggleState}>{authState == "login" ? "New here? Create a new account." : "Already have an account? Log in."}</p>
                <button className='rounded text-lg p-2 bg-indigo-600 text-white font-bold'>{authState == "login" ? "Log in" : "Register"}</button>
            </form>
        </div>
    )
}

export default Auth