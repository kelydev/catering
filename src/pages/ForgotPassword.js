import React, {useState} from 'react';
import '../styles/sass/_login.scss';

export default function ForgotPassword() {
 
    return (
    <>
        <section className='login'>
            <form action='/' className='login__form' onSubmit={handleSubmit}>
                <div className='container__form'>
                    <h2 className='login__title'>Recupera tu acceso</h2>
                    <div className='input-groups'>
                        <input type='email' id='email' name='email' required className='input' onChange={handleInput}/>
                        <label className='label'>correo electronico</label>
                    </div>
                    <button className='login__button--sesion' type="submit">Enviar Instrucciones</button>
                </div>
                {error && <p>{error}</p>}
            </form>
        </section>
    </>
    );
}