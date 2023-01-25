import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Login from "./components/Login.jsx";
import Forgot from "./components/Forgot-password";
import Home from "./components/Home.jsx";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict path="/" element={<Home />} />
        <Route strict path="/login" element={<Login />} />
        <Route strict path="/register" element={<Register />} />
        <Route strict path="/forgot-password" element={<Forgot />} />
      </Routes>
    </div>
    )
 }
 export default App;