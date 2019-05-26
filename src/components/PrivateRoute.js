import { Route ,  Redirect } from "react-router-dom";
import React from 'react'
import store from '../Store'

export const PrivateRoute = ({ component: Component, ...props }) => {
  //console.log("boutta check authentication: " + props.isAuth)
    
  
  
  return (
    <Route
      {...props}
      render={innerProps =>
        props.isAuth ? 
            <Component {...innerProps} />
            :
            <Redirect
             to={{ pathname: "/login",
             state: {from: props.location}}}/>
      }
    />
  );
};