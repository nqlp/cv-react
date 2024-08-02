import React from 'react';
import './Footer.css';

const Footer = ({ firstName, lastName }) => {
    return (
        <footer>
            <p> {firstName} {lastName} </p>
        </footer>
    );
};

export default Footer;