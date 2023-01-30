import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Coffees = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const navigate = useNavigate()

    useEffect(() => {
        !isAuthenticated && navigate("/")
    }, [])

    return (
        <div>Coffees</div>
    )
}

export default Coffees