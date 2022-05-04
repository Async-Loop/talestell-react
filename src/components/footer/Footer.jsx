import React from 'react';
import './footer.styles.css';

const Footer = () => {
	return (
		<>
			<footer className="footer container-fluid">
				<div className="main container">
					<div className="left">
						<a className="brand" href="#">
							<h1>TalesTell</h1>
						</a>
						<ul className="social">
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
					<div className="right">
						<h2>What are you waiting for?</h2>
						<p>Sign up and join the community</p>
						<div className="email-btn row">
							<input type="text" placeholder="Enter your email" required />
							<button className="btn-signup">Sign Up</button>
						</div>
					</div>
				</div>
				<div className="copyright container-fluid">
					<i className="fa-solid fa-copyright"></i>
					&nbsp; 2022 Copyright Tales Tell
				</div>
			</footer>
		</>
	);
};

export default Footer;
