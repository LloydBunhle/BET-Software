import React from 'react'
import { Route, Navigate } from 'react-router-dom'



export default function PrivateRouter({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={(props) => localStorage.getItem("user") ? <Component {...props} /> : <Navigate to={{ pathname: '/', state: { from: props.location } }} />}
      />
    )
}