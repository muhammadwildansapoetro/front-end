import "./navbar.css";
import NavItem from "./navItem";

interface IProps {
  name: string;
}

/* Dalam 1 component wajib ada return
Dalam 1 component hanya bisa 1 parent element (div) */
function Navbar(props: IProps) {
  return (
    <div className="navbar">
      <p>Navbar</p>
      <NavItem />
      <p>Halo {props.name}</p>
    </div>
  );
}

export default Navbar;
