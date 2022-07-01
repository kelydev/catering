import {useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "../utils/AuthContext";
import React, {useState} from 'react';
import '../styles/sass/_login.scss';

export default function LogIn() {
    const auth = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await auth.signIn(user.email, user.password);
          navigate("/");
        } catch (error) {
          setError(error.message);
        }
      };
    
      const handleInput = ({ target: { value, name } }) => setUser({ ...user, [name]: value });
  
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
                          <input type='email' id='email' name='email' required className='input' onChange={handleInput}/>
                          <label className='label'>correo electronico</label>
                      </div>
                      <div className='input-groups'>
                          <input type='password' id='password' name='password' required className='input' onChange={handleInput}/>
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