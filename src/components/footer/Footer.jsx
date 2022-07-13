import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/HomePage.styles.css';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container-fluid">
					<div className="footer__section-bleft">
						<a className="brand" href="/">
							<h1>TalesTell</h1>
						</a>
						<ul className="footer-icons">
							<li>
								<i className="fa-brands fa-facebook"></i>
							</li>
							<li>
								<i className="fa-brands fa-instagram"></i>
							</li>
							<li>
								<i className="fa-brands fa-github"></i>
							</li>
						</ul>
					</div>
					<div className="footer__section-right">
						<div className="text">
							<h2 className="signup-heading">What are you waiting for?</h2>
							<p className="signup-community">Sign up and join the community</p>
						</div>
						<div className="buttons">
							<input
								type="text"
								placeholder="Enter your email"
								className="btn-input"
								required
							/>
							<Link to="/signup" className="btn-signup">
								Sign Up
							</Link>
						</div>
					</div>
				</div>
				<p className="copyright-text">
					<i className="fa-solid fa-copyright"></i> 2022 Copyright TalesTell
				</p>
			</footer>
		</>
	);
};

export default Footer;
