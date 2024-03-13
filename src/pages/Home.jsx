import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Function to navigate to Login page
  const goToLogin = () => {
    navigate("/login");
  };

  // Function to navigate to Signup page
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="home-page">
      <h1>Homepage</h1>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToSignUp}>Sign Up</button>
    </div>
  );
};

export default Home;
