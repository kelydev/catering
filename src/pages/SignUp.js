import {NavLink, useNavigate} from 'react-router-dom';
import { useAuth } from "../utils/AuthContext";
import React, {useState} from 'react';
import '../styles/sass/_login.scss';

export default function SignUp() {

  const { firebaseRegisterUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre:"",
    email: "",
    password: "",
  });

  const handleInput = ({ target: { value, name } }) =>
  setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await firebaseRegisterUser(user.nombre, user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <section className='login'>
      <form action='/' className='login__form' onSubmit={handleSubmit}>
        <div className='container__form'>
          <h2 className='login__title'>¡bienevenido!</h2>
          <p className='login__description'>configuremos tu cuenta personal</p>

          <div className='input-groups'>
            <input type='text' name='nombre' required className='input' onChange={handleInput}/>
            <label className='label'>nombre</label>
          </div>

          <div className='input-groups'>
            <input type='email' name='email' required className='input' onChange={handleInput}/>
            <label className='label'>correo electronico</label>
          </div>

          <div className='input-groups'>
            <input type='password' name='password' required className='input' onChange={handleInput}/>
            <label className='label'>contraseña</label>
          </div>
          
          <p className='login__password'><NavLink to='#' className='login__form--input'>acepto los términos de uso y la política de privacidad</NavLink></p>
          <button className='login__button--sesion'>crear cuenta</button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </section>
  </>
  );
}