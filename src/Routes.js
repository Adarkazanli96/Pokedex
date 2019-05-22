import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from './containers/Pokedex'
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup"

export default () =>
  <Switch>
    <Route path="/" exact component={Pokedex} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;