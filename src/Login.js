import React, { useState } from 'react';
import './Login.css';
import image1 from './images/image1.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='account-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <img src={image1} alt='' />
          </div>
          <div className='col-2'>
            <div className='form-container'>
              <div className='form-btn'>
                <span>Login</span>
                <span>Register</span>
                <hr id='Indicator' />
              </div>
              <form id='LoginForm'>
                <input
                  type='text'
                  value={email}
                  placeholder='email'
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type='submit' onClick={signIn} className='btn'>
                  Login
                </button>
                <button type='submit' onClick={register} className='btn'>
                  Register
                </button>
              </form>
              {/* <form id='RegForm'>
                <input
                  type='text'
                  value={username}
                  placeholder='Username'
                  onChange={e => setUsername(e.target.value)}
                />
                <input
                  value={email}
                  type='text'
                  placeholder='Email'
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  value={password}
                  type='password'
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                />
                <button type='submit' onClick={register} className='btn'>
                  Register
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
