import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Auth = () => {
    const [authState, setAuthState] = useState("login")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("")

    const toggleState = () => {
        authState == "login" ? setAuthState("register") : setAuthState("login")
        resetForm()
    }

    const resetForm = () => {
        setUsername(""); setPassword(""); setConfirmPass(""); setEmail("");
    }

    const submit = (e) => {
        e.preventDefault();
        const payload = {
            username, password
        }
        if (authState == "register") {
            if (password != confirmPass) throw "Passwords do not match!"
            if (!email) throw "Invalid email!"
            if (!username) throw "Invalid username!"
            if (!password) throw "Invalid password!"
            axios.post(`${process.env.REACT_APP_SERVER || "http://localhost:3001"}/register`, { ...payload, email }).then(res => {
                toggleState("login")
            }).catch(err => console.log(err))
        } else {
            if (!username) throw "Invalid username!"
            if (!password) throw "Invalid password!"
            axios.post(`${process.env.REACT_APP_SERVER || "http://localhost:3001"}/login`, { ...payload }).then(res => {
                console.log(res);
            }).catch(err => console.log(err))
        }
    }

    const setChange = (e) => {
        const { name, value } = e.target;
        if (name == "username") setUsername(value);
        if (name == "password") setPassword(value);
        if (name == "confirmPass") setConfirmPass(value);
        if (name == "email") setEmail(value);
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <form className='flex flex-col w-4/12 gap-4' onSubmit={submit}>
                <p className='font-bold text-3xl'>{authState == "login" ? "Login" : "Register"} </p>
                <input className="border-2 border-inidigo-500 p-2 rounded-md" name="username" value={username} onChange={setChange} type="text" placeholder="Enter username" />
                {authState == "register" && <input className="border-2 border-inidigo-500 p-2 rounded-md" name="email" value={email} onChange={setChange} type="text" placeholder="Enter email" />}
                {authState == "register" && <input className='border-2 border-inidigo-500 p-2 rounded-md' type="password" name="confirmPass" value={confirmPass} onChange={setChange} placeholder="Confirm password" />}
                <input className='border-2 border-inidigo-500 p-2 rounded-md' type="password" name="password" value={password} onChange={setChange} placeholder="Enter password" />
                <p className='m-4 hover:underline cursor-pointer text-indigo-500' onClick={toggleState}>{authState == "login" ? "New here? Create a new account." : "Already have an account? Log in."}</p>
                <button className='rounded text-lg p-2 bg-indigo-600 text-white font-bold'>{authState == "login" ? "Log in" : "Register"}</button>
            </form>
        </div>
    )
}

export default Auth