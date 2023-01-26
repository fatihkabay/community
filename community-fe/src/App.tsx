import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Routes, Route } from "react-router-dom";
interface Login {
  email: string;
  password: string;
}

interface Register {
  name: string;
  email: string;
  password: string;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    )
 }
 export default App;