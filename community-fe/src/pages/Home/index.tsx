import { useEffect, useState } from "react";
import { getUser } from "../../utils/helpers";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, []);

  if (user == null) return <></>;
  else
    return (
      <div className="home-page">
        Home Page
        <p className="description">
          Hello, you have successfully logged into our site.
        </p>
        <p className="description">{user.name + user.lastname}</p>
      </div>
    );
};

export default Home;
