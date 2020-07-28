import React from 'react';
import Logo from '../../assets/imagens/LogoMain.png';
import Button from '../Button/index';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={Logo} alt="interflix-logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                New Video
            </Button>
        </nav>
    );
};

export default Menu;