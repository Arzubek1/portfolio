import React from 'react';
import scss from "./Social.module.scss"
import { FiGithub } from 'react-icons/fi';
import { SlSocialInstagram } from 'react-icons/sl';
import { RiTelegram2Line } from 'react-icons/ri';
import { LuLinkedin } from 'react-icons/lu';
const Socials = () => {
    return (
        <div className={scss.socials}>
            <a href="#" title='GitHub'><FiGithub /></a>
            <a href="#" title='Instagram'><SlSocialInstagram /></a>
            <a href="#" title='Telegram'><RiTelegram2Line /></a>
            <a href="#" title='Linkedin'><LuLinkedin /></a>
        </div>
    );
};

export default Socials;