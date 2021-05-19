import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Walter McCone</Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"} to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"} to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className={
                window.location.pathname === "/" || window.location.pathname === "/About"
                  ? "nav-link active"
                  : "nav-link"
              } to="/">About</Link>
            </li>
          </ul>
        </div>
    </nav>
    )

}

export default Navbar;
