import {useNavigate, NavLink } from 'react-router-dom';
import { firebaseRegisterUser } from '../firebase';
import React, { useRef } from 'react';
import '../styles/sass/_login.scss';

export default function SignUp() {
  const navigate = useNavigate();
  const form = useRef(null);

  const userRegister = (event) => {
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
    <section className='login'>
      <form action='/' className='login__form' ref={form}>
        <div className='container__form'>
          <h2 className='login__title'>¡bienevenido!</h2>
          <p className='login__description'>configuremos tu cuenta personal</p>
        <div className='input-groups'>
          <input type='email' name='email' required className='input'/>
          <label className='label'>correo electronico</label>
        </div>
        <div className='input-groups'>
          <input type='password' name='password' required className='input'/>
          <label className='label'>contraseña</label>
        </div >
        <p className='login__password'><NavLink to='#' className='login__form--input'>acepto los términos de uso y la política de privacidad</NavLink></p>
        <button onClick={userRegister} className='login__button--sesion'>crear cuenta</button>
      </div>
    </form>
  </section>
  </>
  );
}

