import React from 'react';
import './Login.css';
import image1 from './images/image1.png';

function Login() {
  const register = () => {
    // RegForm.style.transform = 'translateX(0px)';
    // LoginForm.style.transform = 'translateX(0px)';
    // Indicator.style.transform = 'translateX(100px)';
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
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
                <button type='submit' className='btn'>
                  Login
                </button>
              </form>
              <form id='RegForm'>
                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit' onClick={register} className='btn'>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
