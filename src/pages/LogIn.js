import {useNavigate, NavLink } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import React, {useState} from 'react';
import '../styles/sass/_login.scss';
import axios from 'axios';
//import Cookie from 'js-cookie';

export default function LogIn() {

    const { setAuth } = useAuth();

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            let datos = {email, password }
            const { data } = await axios.post('https://immense-lowlands-06812.herokuapp.com/auth/signin', datos);
            const token = data.access_token;
            //Cookie.set('token', token, { expires: 5 });
            localStorage.setItem('token', data.access_token)
            console.log(token);
            setAuth(data.access_token);
          navigate("/");
        } catch (error) {
          setError(error.message);
        }
      };
    
      //const handleInput = ({ target: { value, name } }) => setUser({ ...user, [name]: value });
  
      return (
      <>
          <section className='login'>
              <form action='/' className='login__form' onSubmit={handleSubmit}>
                  <div className='container__form'>
                      <h2 className='login__title'>inicia sesion</h2>
                      <p className='login__description'>
                          ¿no tienes una cuenta?
                          <b><NavLink to='/sigup' className='login__register'> unete ahora</NavLink></b>
                      </p>
                      <div className='input-groups'>
                          <input id='email' type='email' name='email' className='input' value={email} onChange={e => setEmail(e.target.value)}/>
                          <label className='label'>correo electronico</label>
                      </div>
                      <div className='input-groups'>
                      <input id='password' type='password' name='password' className='input' value={password} onChange = {e => setPassword(e.target.value)}/>
                          <label className='label'>contraseña</label>
                      </div >
                      <button className='login__button--sesion' type="submit">iniciar sesion</button>
                      <p className='login__password'><NavLink to='#' className='login__form--input'>olvide ni contraseña</NavLink></p>
                  </div>
                  {error && <p>{error}</p>}
                  <div className='login__button'>
                      <button className='login__button-facebook btns'>facebook</button>
                      <button className='login__button-google btns'>google</button>
                  </div>
              </form>
          </section>
      </>
    );
}