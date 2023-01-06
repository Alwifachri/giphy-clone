import { Nav } from "react-bootstrap";
import "./index.css";

function Navigation() {
  return (
    <Nav className="fixed-top">
      <div className="container container-navbar">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#tren">TRENDING</a>
          </li>
          <li>
            <a href="#search">SEARCH</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navigation;
