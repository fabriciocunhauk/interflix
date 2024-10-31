import React from 'react';
import { FooterBase } from './styles.js';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/" >
        <img className="Logo" src={"https://fontmeme.com/permalink/200728/87e70c9eadebead816f7e9fb79622c09.png"} alt="interflix-logo" />
      </Link>
    </FooterBase>
  );
}

export default Footer;
