import React from 'react';
import './About.css';
import Footer from '../components/Footer/Footer';

const About = () => {
    return (
        <div className='wrapper'>
            <h1>About me.</h1>
            <div className='about__describe'>
                <div className='about__describe__block'>
                    <img width={480} height={320} src='/img/football.jpeg' alt='football'></img>
                    <div className='about__describe__text'>
                        <p>On my free time, if I'm not coding, you can find me probably playing football, which is my passion.</p>
                        <p>Started playing at the age of 10, during more than 20 years I feel as a good team player, which is always trying to do more than any other average player.</p>
                        <p>I mean both to insure your partners in defense and create chances in attack.</p>
                    </div>
                </div>
                <div className='about__describe__block'>
                    <div className='about__describe__text'>
                    <p>Another my life passion is yoga. Not just as physical exercise, but as a philosophy of life.</p>
                    <p><br /></p>
                    <p>Also I'm trying to test something new to keep developing myself, such as new kind of sports, including some extrime ones.</p>
                    <p>I created this website to test my programming skills, so please do not be strict to design, as I did it on my own.</p>
                    <p>In fact it is not about design, but about realization of some features, like animation, transition, etc.</p>
                    </div>
                    <img width={480} src='/img/snowbord.jpeg' alt='football'></img>
                </div>
            </div>
        </div>
    );
}

export default About;
