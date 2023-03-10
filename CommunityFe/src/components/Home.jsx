import { Button, Space } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-btn-container">
        <>
          <Space direction="vertical">
            <Space wrap>
              <Link to="/login">
                <Button type="primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button type="primary">Register</Button>
              </Link>
            </Space>
          </Space>
        </>
      </div>
      <p className="description">
        Hello, welcome to our community site. We are working to provide you with
        the best service and to make our life easier. You can register above or
        log in if you have an account.
      </p>
    </div>
  );
};

export default Home;
