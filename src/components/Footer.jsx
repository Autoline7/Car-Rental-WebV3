import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row footer__row">
                    <div className="footer__intro footer__content">
                        <h4 className="footer__intro__title">CAR Rental</h4>
                        <p className="footer__intro__para">We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                        <div className="footer__intro__links">
                            <a href="#" className="footer__intro__link" disabled>(123)-456-789</a>
                            <a href="#" className="footer__intro__link" disabled>carrental@gmail.com</a>
                            <a href="https://xpeedstudio.com" target="_blank" className="footer__intro__link">Design by XpeedStudio</a>
                        </div>
                    </div>
                    <div className="footer__company footer__content">
                        <h4 className="footer__company__title">Working Hours</h4>
                        <div className="footer__company__links">
                            <a href="#" className="footer__company__link">New York</a>
                            <a href="#" className="footer__company__link">Careers</a>
                            <a href="#" className="footer__company__link">Mobile</a>
                            <a href="#" className="footer__company__link">Blog</a>
                            <a href="#" className="footer__company__link">How we work</a>
                        </div>
                    </div>
                    <div className="footer__hours footer__content">
                        <h4 className="footer__hours__title">WORKING HOURS</h4>
                        <div className="footer__hours__list"><span className="footer__hours__time">Mon - Fri: 9:00AM - 9:00PM</span></div>
                        <div className="footer__hours__list"><span className="footer__hours__time">Sat: 9:00AM - 19:00PM</span></div>
                        <div className="footer__hours__list"><span className="footer__hours__time">Sun: Closed</span></div>
                    </div>
                    <div className="footer__email footer__content">
                        <h4 className="footer__email__title">Subscription</h4>
                        <p className="footer__email__para">Subscribe your Email address for latest news & updates.</p>
                        <form className="footer__email__form">
                            <input placeholder='Enter Email Address' type="text" className='footer__email__form__input' />
                            <button className="footer__email__form__submit disabled">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
