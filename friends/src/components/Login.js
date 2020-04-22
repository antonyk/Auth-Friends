import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const defaultRedirect = '/defaultRedir';

export default function Login(props) {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({login: ''})

  function inputChangeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function loginHandler(e) {
    e.preventDefault();
    // call auth with login and get token
    axiosWithAuth()
      .post('/api/login', user)
      .then(res =>{
        // set token to localstorage
        localStorage.setItem('token', JSON.stringify(res.data.payload))
        // redirect
        const destination = props.redirTo ? props.redirTo : defaultRedirect;
        props.history.push(destination);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='component-root'>
      <div>
        <h2>
          Existing User Login
        </h2>
      </div>

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
        <div>{errors.login}</div>
        <button>Login</button>
      </form>

    </div>
  )
}