import {useNavigate } from 'react-router-dom';
import { firebaseLogIn } from '../firebase';
import React, { useRef } from 'react';
import {
  NavLink
} from 'react-router-dom';
import '../styles/sass/_login.scss';

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
  <section className='login'>
    <form action='/' className='login__form' ref={form}>
      <div className='container__form'>
        <h2 className='login__title'>inicia sesion</h2>
        <p className='login__description'>
        ¿no tienes una cuenta?
        <b><NavLink to='/sigup' className='login__register'> unete ahora</NavLink></b>
      </p>
      <div className='input-groups'>
        <input type='email' name='email' required className='input'/>
        <label className='label'>correo electronico</label>
      </div>
      <div className='input-groups'>
          <input type='password' name='password' required className='input'/>
          <label className='label'>contraseña</label>
      </div >
        <button onClick={userLogIn} className='login__button--sesion'>iniciar sesion</button>
        <p className='login__password'><NavLink to='#' className='login__form--input'>olvide ni contraseña</NavLink></p>
      </div>
      <div className='login__button'>
        <button className='login__button-facebook btns'>facebook</button>
        <button className='login__button-google btns'>google</button>
      </div>
    </form>
  </section>
  </>
  )
}
