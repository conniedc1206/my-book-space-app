import { Routes, Route } from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import AddLog from './AddLog'
// import Gallery from "./Gallery"
// import Footer from "./Footer"
import Dashboard from "./Dashboard"
import LogDetails from "./LogDetails";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id" element={<Dashboard />} />
        <Route path="/users/:id" element={<AddLog />} />
        <Route path="/logs/:id" element={<LogDetails />} />
      </Routes>
    </div>
  );
}

export default App;