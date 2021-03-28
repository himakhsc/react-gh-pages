import React from 'react';
import './styles.css';
import Logo from './../../assets/logo.png';


const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                   <img src={Logo} alt='simple text' />
                </div>
            </div>
        </header>
    );
};


export default Header;