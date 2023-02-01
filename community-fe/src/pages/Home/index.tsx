import { useEffect } from "react";
import { clearStorage, getUser } from "../../utils/helpers";
import "./home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
 const navigate = useNavigate();
  useEffect(() => {
    const user = getUser();
     if(user != null) {
      navigate("/login")
     }
  }, []);

  const onLogout = () => {
    clearStorage();
    navigate("/login");
  }

  return (
    <div className="home-page">
      Home Page
      <p className="description">
        Hello, welcome to our community site. We are working to provide you with
        the best service and to make our life easier. You can register above or
        log in if you have an account.
      </p> 

    </div>
  );
};

export default Home;