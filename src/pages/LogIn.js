import {useNavigate } from 'react-router-dom';
import { firebaseLogIn } from '../firebase';
import React, { useRef } from 'react';
import {
  NavLink
} from 'react-router-dom';


export default function LogIn() {

  const navigate = useNavigate();
  const form = useRef(null);

  const userLogIn = async (event) => {
    event.preventDefault();
		const formData = new FormData(form.current);
		const credentials = {
		  email: formData.get('email'),
			password: formData.get('password')
		}
		console.log(credentials);
    const logIn = await firebaseLogIn(credentials);

    if (logIn) {
      console.log(logIn);
      console.log('Bienvenida');
      navigate('/', { replace: true });
    } else {
      console.log('error');
    }
  }

  return (
    <>
    <h1>Login</h1>
    <div className="container">
      <form action="/" className="form" ref={form}>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name ="email" aria-describedby="email"/>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password"/>
        </div>
        <button onClick={userLogIn} className="primary-button login-button">Iniciar</button>
        <NavLink to="/sigup" className="nav__button-login-text">Registrar</NavLink>
      </form>
    </div>
  </>
  )
}
