import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='header-title'>
            <h3>App Title</h3>
          </div>
          <div className='header-menu'>
            <div className='menu-item'>
              <Link className='App-link' to='/friends'>Friends</Link>
            </div>
            <div className='menu-item'>
              <Link className='App-link' to='/login'>Login</Link>
            </div>
          </div>
        </header>
        <section>
          <Switch>
            <PrivateRoute path='/friends' component={Friends} />
            <Route path='/login' render={ (routeProps) => (<Login {...routeProps} redirTo='/passedRedir' />) } />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
