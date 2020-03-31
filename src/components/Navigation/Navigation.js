import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => (
  <nav>
    <NavLink to="/" exact activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/users" activeClassName="active">
      Users
    </NavLink>
  </nav>
);

export { Navigation };
