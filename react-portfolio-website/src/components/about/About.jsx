import React from 'react';
import './about.css'
import ME from '../../assets/fix-bug.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className ="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>01 + Year Working</small>
                        </article>

                        <article className ="about__card">
                            <FiUser className="about__icon"/>
                            <h5>Clients</h5>
                            <small>10+ Worldwide</small>
                        </article>

                        <article className ="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                    Will you be the new person of tomorrow or the copy of yesterday?
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;
