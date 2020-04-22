import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'

const defaultRedirect = '/defaultRedir';

export default function Login(props) {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [user, setUser] = useState({})

  function inputChangeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function loginHandler(e) {
    e.preventDefault();
    // call auth with login and get token

    // set token to localstorage

    // redirect
    const destination = props.redirTo ? props.redirTo : defaultRedirect;

    props.history.push(destination);

  }

  return (
    <div>
      <form onSubmit={loginHandler}>
        <div className='input-group'>
          <label htmlFor='username'>
            Username
            <input type='text' name='username' id='username' onChange={inputChangeHandler} />
          </label>
        </div>
        <div className='input-group'>
          <label htmlFor='password'>
            Password
            <input type='text' name='password' id='password' onChange={inputChangeHandler} />
          </label>
        </div>
        <button>Login</button>
      </form>

    </div>
  )
}