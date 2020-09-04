import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Login() {
    const [opcionesMenu, setLogin] = useState(1);
    if (opcionesMenu === 1) {
        return (
            <>
                <Header />
                <div>
                    <form>
                        <input type='email' placeholder='E-mail'></input>
                        <input type='password' placeholder='Contraseña'></input>
                        <button className='buttondet' ><Link to='/'>Cancelar</Link></button>
                        <button className='buttondet' ><Link to='/'>Confirmar</Link></button>
                    </form>
                    <br></br>
                    <butoton className='buttondeta' onClick={() => setLogin(2)}>Registrarse</butoton>
                </div>
                <Footer />
            </>
        );
    }
    else {
        return (
            <>
                <Header />
                <div>
                    <form class="col-sm-12 col-lg-4">
                        <input type='text' placeholder='Nombre'></input>
                        <input type='text' placeholder='Apellido'></input>
                        <input type='email' placeholder='E-mail'></input>
                        <input type='password' placeholder='Contraseña'></input>
                        <input type='password' placeholder='Repetir Contraseña'></input>
                        <button className='buttondet' ><Link to='/'>Cancelar</Link></button>
                        <button className='buttondet' ><Link to='/'>Registrarme</Link></button>
                    </form>
                    <br></br>
                    <butoton className='buttondeta' onClick={() => setLogin(1)}>Iniciar Sesion</butoton>
                </div>
                <Footer />
                
            </>
        );
    }
}
export default Login;