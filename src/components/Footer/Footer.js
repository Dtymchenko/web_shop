import React from 'react';
import './Footer.css';

const Footer = () => {

    const footer = "Your Advertisement Could Be Here :)   "

    return (
        <footer>
                <div className='footerCover'>
                    <span className='footerSpanChange'>{footer}</span>
                    <span className='footerSpan'>That's just a joke!</span>
                </div>
            </footer>
    );
}

export default Footer;
