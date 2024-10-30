import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index.js';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/" >
                <img className="Logo" src={"https://fontmeme.com/permalink/200728/87e70c9eadebead816f7e9fb79622c09.png"} alt="interflix-logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video" >
                New Video
            </Button>
        </nav>
    );
};

export default Menu;