// import {useState, useEffect} from "react"
import Signup from './Signup'
import Login from './Login'
import Gallery from "./Gallery"
import Footer from "./Footer"
import Dashboard from "./Dashboard"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;