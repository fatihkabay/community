import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import { Routes, Route } from "react-router-dom";
import './index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

    )
 }
 export default App;