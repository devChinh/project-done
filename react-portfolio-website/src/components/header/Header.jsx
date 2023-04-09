import React from 'react';
import './header.css'
import ME from '../../assets/me-working-removebg-preview.png'
import HeaderSocials from './HeaderSocials';
import Buttons from './Buttons';

const Header = () => {
    return (
         <header >
             <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Cikey Dev</h1>
                <h5 className="text-light">
                    FullStack Developer
                </h5>
                <Buttons />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
             </div>
         </header>
    );
}

export default Header;
