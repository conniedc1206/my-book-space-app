import React, { useEffect, useState } from "react"
import NavDashboard from "./NavDashboard"
import Logs from "./Logs"
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom"

function Dashboard(){

    const [user, setUser] = useState({})
    let { id } = useParams()

    useEffect(() => {
        async function fetchUser(){
            const response = await fetch(`/users/${id}`)
            const LoggedInUser = await response.json()
            setUser(LoggedInUser)
        }
        fetchUser()
    }, [id])
    
    return (
        <Box>
            <NavDashboard user={user}/>
            <Logs user={user}/>
        </Box>
    )
}

export default Dashboard;