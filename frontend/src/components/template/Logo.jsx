import React from "react";
import logo from "../../assets/imgs/logo.png";
import "./Logo.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </aside>
);
