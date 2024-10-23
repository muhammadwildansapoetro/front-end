import "./navbar.css";
import NavItem from "./navItem";
import logo from "../assets/logo.png";

// interface IProps {
//   name: string;
// }

/* Dalam 1 component wajib ada return
Dalam 1 component hanya bisa 1 parent element (div) */
// function Navbar(props: IProps) {
function Navbar() {
  return (
    <div className="navbar">
      <img alt="logo" src={logo} className="logo" />
      <NavItem />
      {/* <p>Halo {props.name}</p> */}
    </div>
  );
}

export default Navbar;
