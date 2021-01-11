import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UserCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);
