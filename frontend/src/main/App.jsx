import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routers";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
