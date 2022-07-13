import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Gallery from "./Gallery"
import Dashboard from "./Dashboard"
import Footer from "./Footer";

function App() {

  // useEffect for API pull
  
  return (
    <div className="App">
      <Dashboard />
      <Signup />
      <Login />
      <Gallery />
      <Footer />
      
    </div>
  );
}

export default App;