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
          <div>
            <h3>App Title</h3>
          </div>
          <div>
            <Link className='App-link' to='/login'>Login</Link>
          </div>
        </header>
        <section>
          <Switch>
            <PrivateRoute path='/friends' component={Friends} />
            <Route path='/login' component={Login} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
