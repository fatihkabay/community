import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route } from "react-router-dom";
import './index'
interface Login {
  email: string;
  password: string;
}

interface Register {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  gender: string;
  birthday: number;
}

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Route path="/home" element={<Home />} />
    </div>
      </BrowserRouter>

    )
 }
 export default App;