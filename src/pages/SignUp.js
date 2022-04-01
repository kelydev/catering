import {useNavigate } from 'react-router-dom';
import { firebaseRegisterUser } from '../firebase';
import React, { useRef } from 'react';

export default function SignUp() {
  const navigate = useNavigate();
  const form = useRef(null);

  const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const user = {
		  email: formData.get('email'),
			password: formData.get('password')
		}
		console.log(user);
    firebaseRegisterUser( user.email, user.password);
    navigate('/login', { replace: true });
	}
    return (
      <>
      <h1>Formulario de registro</h1>
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
          <button onClick={handleSubmit} className="primary-button login-button">Registrar</button>
        </form>
      </div>
    </>
  );
}

