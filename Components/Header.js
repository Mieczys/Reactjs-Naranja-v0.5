import React from 'react';
import Menu from '../Components/Menu'
import Wbuy from '../Includes/Images/wbuy.png';

function Header() {
    return (
        < div className='App' >
            <header className='App-header grid2'>
                <img src={Wbuy} className='App-logo' alt='logo' />
                <h1>Bienvenidos a Wbuy</h1>
                <Menu />
            </header>
        </div >
    );
}
export default Header;