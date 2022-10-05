import React from 'react';
import './Contacts.css';
import Footer from '../components/Footer/Footer';

const Contacts = () => {



    return (

        
        <div className='wrap'>
            <h1>Contacts</h1>
            <div className='contact__totalBlock'>
                <div className='contact__photo'>
                    <img width={512} src='/img/me.jpeg' alt='photo'></img>
                </div>
                <div className='contact__items'>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/icons8-call-40.png' alt='call'></img>
                <a target="_blank" href='tel:+380509372778'>+38-050-937-27-78</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/telegram-3-xxl.png' alt='telegram'></img>
                <a target="_blank" href='https://telegram.me/DimaT_kh'>DimaT_kh</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/icons8-mail-48.png' alt='email'></img>
                <a target="_blank" href='mailto:timchenkod88@gmail.com'>timchenkod88@gmail.com</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/icons8-skype-48.png' alt='skype'></img>
                <a target="_blank" href='skype:timchenkod88?chat'>timchenkod88</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/icons8-linkedin-circled.gif' alt='linkedin'></img>
                <a target="_blank" href='https://www.linkedin.com/in/dima-tymchenko/'>https://www.linkedin.com/in/dima-tymchenko/</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/github-9-xxl.png' alt='github'></img>
                <a target="_blank" href='https://github.com/Dtymchenko'>https://github.com/Dtymchenko</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/icons8-youtube-64.png' alt='youtube'></img>
                <a target="_blank" href='https://www.youtube.com/watch?v=SIQwQxepXAw'>https://www.youtube.com/watch?v=SIQwQxepXAw</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/2021_Facebook_icon.svg' alt='facebook'></img>
                <a target="_blank" href='https://www.facebook.com'>facebook.com</a>
                </div>
                <div className='contact__item'>
                <img width={20} height={20} src='/img/icons8-user-location-100.png' alt='location'></img>
                <a target="_blank" href='https://www.google.com/maps/place/Kyiv,+02000/@50.4016991,30.2525157,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234'>Kyiv, Ukraine</a>
                </div>
            </div>
            </div>            
        </div>
    )
}

export default Contacts;

