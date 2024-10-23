import "./home.css";
import logo from "../assets/webdev2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="left-element">
        <img alt="logo" src={logo} className="webdev-logo" />
      </div>

      <div className="right-element">
        <div className="hello">Hello!</div>
        <div className="introduct">
          I'm <Link to={"/about"}>Muhammad Wildan</Link>,
          <br />a web developer student.
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Home;
