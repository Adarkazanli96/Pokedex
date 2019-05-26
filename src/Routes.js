import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from './containers/Pokedex'
import Login from "./containers/Login";
import Signup from "./containers/Signup"

export const AuthorizedRoutes = () =>
  <Switch>
    <Route path="/" exact component={Pokedex} />
  </Switch>

export const NonAuthorizedRoutes = () => 
<Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} /></Switch>
