import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site__footer">
            <div className="site-footer">
                <div className="container">
                    <div className="site-footer__widgets">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="site-footer__widget footer-contacts">
                                    <h5 className="footer-contacts__title">Contact Us</h5>
                                    <div className="footer-contacts__text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.</div>
                                    <ul className="footer-contacts__contacts">
                                        <li><i className="footer-contacts__icon fas fa-globe-americas"></i> 715 Fake Street,
                                            New York 10021 USA</li>
                                        <li><i className="footer-contacts__icon far fa-envelope"></i> stroyka@example.com
                                        </li>
                                        <li><i className="footer-contacts__icon fas fa-mobile-alt"></i> (800) 060-0730,
                                            (800) 060-0730</li>
                                        <li><i className="footer-contacts__icon far fa-clock"></i> Mon-Sat 10:00pm - 7:00pm
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">Information</h5>
                                    <ul className="footer-links__list">
                                        <li className="footer-links__item"><Link className="footer-links__link">About
                                            Us</Link></li>
                                        <li className="footer-links__item"><Link className="footer-links__link">Delivery
                                            Information</Link></li>
                                        <li className="footer-links__item"><Link className="footer-links__link">Privacy
                                            Policy</Link></li>
                                        <li className="footer-links__item"><Link className="footer-links__link">Brands</Link>
                                        </li>
                                        <li className="footer-links__item"><Link className="footer-links__link">Contact
                                            Us</Link></li>
                                        <li className="footer-links__item"><Link
                                            className="footer-links__link">Returns</Link></li>
                                        <li className="footer-links__item"><Link className="footer-links__link">Site
                                            Map</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">My Account</h5>
                                    <ul className="footer-links__list">
                                        <li className="footer-links__item"><a className="footer-links__link">Store
                                            Location</a></li>
                                        <li className="footer-links__item"><a className="footer-links__link">Order
                                            History</a></li>
                                        <li className="footer-links__item"><a className="footer-links__link">Wish
                                            List</a></li>
                                        <li className="footer-links__item"><a
                                            className="footer-links__link">Newsletter</a></li>
                                        <li className="footer-links__item"><a
                                            className="footer-links__link">Specials</a></li>
                                        <li className="footer-links__item"><a className="footer-links__link">Gift
                                            Certificates</a></li>
                                        <li className="footer-links__item"><a
                                            className="footer-links__link">Affiliate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="site-footer__widget footer-newsletter">
                                    <h5 className="footer-newsletter__title">Newsletter</h5>
                                    <div className="footer-newsletter__text">Praesent pellentesque volutpat ex, vitae auctor
                                        lorem pulvinar mollis felis at lacinia.</div>
                                    <form action="#" className="footer-newsletter__form"><label className="sr-only"
                                        for="footer-newsletter-address">Email Address</label> <input type="text"
                                            className="footer-newsletter__form-input form-control"
                                            id="footer-newsletter-address" placeholder="Email Address..." /> <button
                                                className="footer-newsletter__form-button btn btn-primary">Subscribe</button>
                                    </form>
                                    <div className="footer-newsletter__text footer-newsletter__text--social">Follow us on
                                        social networks</div>
                                    <ul className="footer-newsletter__social-links">
                                        <li
                                            className="footer-newsletter__social-link footer-newsletter__social-link--facebook">
                                            <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                        <li
                                            className="footer-newsletter__social-link footer-newsletter__social-link--twitter">
                                            <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                                className="fab fa-twitter"></i></a></li>
                                        <li
                                            className="footer-newsletter__social-link footer-newsletter__social-link--youtube">
                                            <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                                className="fab fa-youtube"></i></a></li>
                                        <li
                                            className="footer-newsletter__social-link footer-newsletter__social-link--instagram">
                                            <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                                className="fab fa-instagram"></i></a></li>
                                        <li className="footer-newsletter__social-link footer-newsletter__social-link--rss">
                                            <a href="https://themeforest.net/user/kos9" target="_blank"><i
                                                className="fas fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
