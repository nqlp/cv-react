import React from "react";
import Tabs from "../Tabs/Tabs";
import './Header.css';
import email_icon from '../../assets/images/email_icon.png';
import phone_icon from '../../assets/images/phone_icon.png';
import github_icon from '../../assets/images/github_icon.png';

const Header = () => {
    return (
        <header>
            <h1>Paul Nguyen</h1>
            <div className="image-container">
                <a href="mailto:quang-long-paul.nguyen.1@ens.etsmtl.ca"><img src={email_icon} alt="email_icon" className="icon" /> </a>
                <a href="tel:+5149127740"> <img src={phone_icon} alt="phone_icon" className="icon" /></a>
                <a href="https://github.com/nqlp"> <img src={github_icon} alt="github_icon" className="icon" /></a>
            </div>
            <Tabs />
        </header>
    );
}

export default Header;