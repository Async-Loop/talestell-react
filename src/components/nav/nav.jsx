import { useState } from 'react';
import Burger from './Burger';

import './nav.styles.css';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<header>
				<div className="container-fluid row">
					<a className="brand" href="/">
						<h1>TalesTell</h1>
					</a>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<a className="nav--link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav--link" href="#">
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a className="nav--link" href="#">
									About
								</a>
							</li>
						</ul>
						<ul className="nav-list">
							<li className="nav-item">
								<button
									className="nav--link__login--button"
									onClick={() => setIsOpen(!isOpen)}>
									Login
								</button>
							</li>
							<li className="nav-item">
								<button
									className="nav--link__signup--button"
									onClick={() => setIsOpen(!isOpen)}>
									Sign up
								</button>
							</li>
						</ul>
					</nav>
					<Burger />
				</div>
			</header>
		</>
	);
};

export default Nav;
