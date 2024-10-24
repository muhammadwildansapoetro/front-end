import "./greeting.css";
import { Link } from "react-router-dom";

function Greeting() {
  return (
    <div className="greeting-box">
      <div className="hello">Hello!</div>
      <div className="name">
        I'm <Link to={"/about"}>Muhammad Wildan</Link>,
        <br />a web developer student.
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
}

export default Greeting;
