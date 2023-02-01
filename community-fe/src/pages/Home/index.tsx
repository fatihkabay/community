import {Space, Button} from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { clearStorage } from "../../utils/helpers";
import "./home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
 const navigate = useNavigate();
  useEffect(() => {

  }, []);

  const onLogout = () => {
    clearStorage();
    navigate("/login");
  }

  return (
    <div className="home-page">
      Home Page
       {/* <div className="home-btn-container">
        <>
          <Space direction="vertical">
            <Space wrap>
              <Link to="/login">
                <Button type="primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button type="primary">Register</Button>
              </Link>
              <Link to="/home" />
            </Space>
          </Space>
        </>
      </div> */}
      <p className="description">
        Hello, welcome to our community site. We are working to provide you with
        the best service and to make our life easier. You can register above or
        log in if you have an account.
      </p> 

    </div>
  );
};

export default Home;