import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPsw from "./pages/ForgotPsw";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import UserInfo from "./pages/UserInfoPg";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/forgot-password" element={<ForgotPsw />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      </Routes>
    </div>
    )
 }
 export default App;