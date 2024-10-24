import React from "react";
import Greeting from "../../components/home/greeting";
import "./home.css";
// import logo from "../../assets/webdev2.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="image-box">
        {/* <img alt="logo" src={logo} className="image" /> */}
      </div>
      <Greeting />
    </div>
  );
}

export default HomePage;
