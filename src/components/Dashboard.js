import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Logs from "./Logs";
import AddLog from "./AddLog";

function Dashboard() {
  const [user, setUser] = useState({});
  
  let { id } = useParams();

  // GET whole user object and save it in "user" state
  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user)

  return (
    <div>
      <h1>Hello</h1>
      <NavBar />
      <Logs user={user}/>
      <AddLog user={user}/>
    </div>
  );
}

export default Dashboard;