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
      <Signup />
      <Login />
      <Gallery />
      <Footer />
      <Dashboard />
    </div>
  );
}

export default App;