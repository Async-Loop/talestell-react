import React from 'react';

const Nav = () => {
	return (
		<>
			<header>
				<div className="container row">
					<a href="#" className="brand">
						<h1>TalesTell</h1>
					</a>
					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__item">
								<a className="nav__link" href="#">
									New Release
								</a>
							</li>
							<li className="nav__item">
								<a className="nav__link" href="#">
									BestSeller
								</a>
							</li>
							<li className="nav__item">
								<a className="nav__link" href="#">
									Mostly Reads
								</a>
							</li>
							<li className="nav__item">
								<a href="" className="nav__link--button">
									Google+
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Nav;
