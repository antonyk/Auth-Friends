import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useSelector, useDispatch, useStore } from 'react-redux';

import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import FriendDetails from './components/FriendDetails'
import FriendEdit from './components/FriendEdit'
import Header from './components/Header'

function App() {
  
  // select isLoggedIn to render Log In / Log Out menu item
  // select friendsCount to display total number of friends

  return (
    <Router>
      <div className="App">
        <Header />
        <section>
          <Switch>
            <PrivateRoute path='/friends/edit/:id' component={FriendEdit} />
            <PrivateRoute path='/friends/:id' component={FriendDetails} />
            <PrivateRoute path='/friends' component={FriendsList} />
            <Route path='/login' render={ (routeProps) => (<Login {...routeProps} redirTo='/friends' />) } />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
