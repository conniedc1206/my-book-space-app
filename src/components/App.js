// import {useState, useEffect} from "react"
import Signup from './Signup'
import Login from './Login'
import LogDetails from './LogDetails'
import AddLog from './AddLog'
// import Gallery from "./Gallery"
// import Footer from "./Footer"
import Dashboard from "./Dashboard"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/logs/:id" element={<LogDetails />} />
        <Route path="/logs" element={<AddLog />} />
      </Routes>
    </div>
  );
}

export default App;