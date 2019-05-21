import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from './containers/Pokedex'
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Pokedex} />
    <Route path="/login" exact component={Login} />
  </Switch>;