import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Site from "./pages/Site";
import { Routes, Route } from "react-router-dom";
import './index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/site" element {...<Site />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

    )
 }
 export default App;