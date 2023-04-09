import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="/"><BsLinkedin />Linkedin</a>
            <a href="/"><BsGithub />Github</a>
            <a href="/"><FaTiktok />Tiktok</a>
        </div>
    );
}

export default HeaderSocials;
