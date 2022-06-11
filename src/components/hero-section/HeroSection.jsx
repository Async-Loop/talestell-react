import React from 'react';
import { Link } from 'react-router-dom';
import './heroSection.styles.css';

const HeroSection = () => {
	return (
		<>
			<section className="section-one">
				<div className="container row">
					<div className="col">
						<h2 className="section-title">There is no friend as loyal as a book</h2>
						<p className="section-subtxt">
							This is a new initiative for bibliophiles that want to read the latest
							reviews, interviews, feedback and plot discussion.
						</p>

						<button className="section-button">
							<Link to="/search">Lets Explore</Link>
						</button>
					</div>
					<div className="col">
						<img src="../../../assets/pic1.svg" alt="Books" />
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
