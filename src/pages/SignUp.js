import {NavLink, useNavigate} from 'react-router-dom';
//import { useAuth } from "../utils/AuthContext";
import React, {useState} from 'react';
import '../styles/sass/_login.scss';
import axios from 'axios';

export default function SignUp() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            let data = {name, last_name, email, password }
            const respuesta = await axios.post('https://immense-lowlands-06812.herokuapp.com/auth/signup', data);
            console.log(respuesta);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }
    return (
    <>
        <section className='login'>
            <form action='/' className='login__form' onSubmit={handleSubmit}>
                <div className='container__form'>
                    <h2 className='login__title'>¡bienevenido!</h2>
                    <p className='login__description'>configuremos tu cuenta personal</p>
                    <div className='input-groups'>
                        <input id='name' type='text' name='name' className='input' value={name} onChange={e => setName(e.target.value)}/>
                        <label className='label'>nombre</label>
                    </div>
                    <div className='input-groups'>
                        <input id='last_name' type='text' name='last_name' className='input' value={last_name} onChange={e => setLastName(e.target.value)}/>
                        <label className='label'>apellido</label>
                    </div>
                    <div className='input-groups'>
                        <input id='email' type='email' name='email' className='input' value={email} onChange={e => setEmail(e.target.value)}/>
                        <label className='label'>correo electronico</label>
                    </div>
                    <div className='input-groups'>
                        <input id='password' type='password' name='password' className='input' value={password} onChange = {e => setPassword(e.target.value)}/>
                        <label className='label'>contraseña</label>
                    </div>
                    <p className='login__password'><NavLink to='#' className='login__form--input'>acepto los términos de uso y la política de privacidad</NavLink></p>
                    <button className='login__button--sesion'>crear cuenta</button>
                </div>
            </form>
        </section>
    </>
  );
}