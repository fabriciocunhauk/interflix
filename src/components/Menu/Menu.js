import React from 'react';
import Logo from '../../assets/imagens/LogoMain.png';
import Button from '../Button/index';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={"https://fontmeme.com/permalink/200728/87e70c9eadebead816f7e9fb79622c09.png"} alt="interflix-logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                New Video
            </Button>
        </nav>
    );
};

export default Menu;