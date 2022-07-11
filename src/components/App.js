import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';

function App() {
  
  [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect for API pull
  
  return (
    <div className="App">
      <Signup />
      <Login />
      <Gallery />
      <Footer />
      <Dashboard isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;