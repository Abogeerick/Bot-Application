import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Bot Collection
          </NavLink>
        </li>
        <li>
          <NavLink to="/your-bot-army" activeClassName="active">
            Your Bot Army
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
