import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from '../logo.svg';


export default function Header(props) {

  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='header-title'>
        <h3>App Title</h3>
      </div>
      <div className='header-menu'>
        {localStorage.getItem('token') ? (
          <>
            <div className='menu-item'>
              <Link className='App-link' to='/friends'>Friends</Link>
            </div>
            <div className='menu-item'>
              <Link className='App-link' to='/login'>Logout</Link>
            </div>
          </>) : (
            <div className='menu-item'>
              <Link className='App-link' to='/login'>Login</Link>
            </div>
          )
        }
      </div>
    </header>
  )
}
