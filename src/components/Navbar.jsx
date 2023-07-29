// components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact="true" activeclassname="active">
            Bot Collection
          </NavLink>
        </li>
        <li>
          <NavLink to="/your-bot-army" activeclassname="active">
            Your Bot Army
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
