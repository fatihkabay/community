import { useEffect } from "react";
import { getUser } from "../../utils/helpers";
import "./home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate();
  useEffect(() => {
    const user = getUser();
    console.log(user);
     if(user == null) {
      navigate("/login")
     }
  }, []);

  return (
    <div className="home-page">
      Home Page
      <p className="description">
      Hello, you have successfully logged into our site. 
     </p> 

    </div>
  );
};

export default Home;