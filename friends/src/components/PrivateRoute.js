import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

// Requirements:
// 1. It has the same API as <Route />.
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders
// the "component" prop. If not, it redirects the user to /login.
export default function PrivateRoute ({ component: Component, ...rest }) {

  axiosWithAuth().get('/api/auth')
    .then(res => {

      return (
        <Route {...rest} render={(props) => (<Component {...props} />)} />
      )
    })
    .catch(err => {
      return (
        <Redirect to='/login' />
      )
    })

  // default immediate return
  return (
    <>
    Resolving Authentication...
    </>
    // empty
  )

};

