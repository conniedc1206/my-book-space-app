import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Logs from "./Logs";
import AddLog from "./AddLog";
import Footer from './Footer';
import Box from '@mui/material/Box';


function Dashboard({ setEditLog }) {
  const [user, setUser] = useState({});
  
  let { id } = useParams();

  // GET whole user object and save it in "user" state
  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <NavDashboard user={user} />
      <Box container sx={{ display: "flex" }}>
        
        <Logs user={user} setEditLog={setEditLog}/>
        <AddLog user={user} />
      </Box>
      <Footer />
    </div>
  );
}

export default Dashboard;