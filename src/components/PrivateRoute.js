import { Route ,  Redirect } from "react-router-dom";
import React from 'react'
import store from '../Store'

export const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        store.getState().reducer.isAuthenticated ? 
            <Component {...innerProps} />
            :
            <Redirect
             to={{ pathname: "/login",
             state: {from: props.location}}}/>
      }
    />
  );
};