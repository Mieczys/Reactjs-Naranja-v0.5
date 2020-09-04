import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        //<form class="col-sm-12 col-lg-4">
        <div className='grid3'>
            <p><button className="buttondet2"><Link to={{ pathname: '/' }}>Inicio</Link></button></p>

            <p><button className="buttondet2"><Link to={{ pathname: '/Tienda' }}>Productos</Link></button></p>
            
            <p><button className="buttondet2"><Link to={{ pathname: '/Login' }}>Login/Sign in</Link></button></p>
        </div >
        //</form>
        
    );
}
export default Menu;