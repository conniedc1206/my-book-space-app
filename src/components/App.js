import {useState, useEffect} from "react"
// import { Route, Switch } from "react-router-dom"
import Signup from './Signup'
import Login from './Login'
import Gallery from "./Gallery"
import Footer from "./Footer"
import Dashboard from "./Dashboard"



function App() {
  
  // [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect for API pull
  
  return (
    <div className="App">
      <Signup />
      <Login />
      <Gallery />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;