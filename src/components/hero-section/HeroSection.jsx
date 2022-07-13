import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/HomePage.styles.css';

const HeroSection = () => {
	return (
		<>
			<section className="container section-one">
				<div className="left-section">
					<h2 className="heading">There is no friend as loyal as a book</h2>
					<p className="sub-heading">
						This is a new initiative for bibliophiles that want to read the latest
						reviews, interviews, feedback and plot discussion.
					</p>
					<Link to="/search" className="button-explore">
						Lets Explore
					</Link>
				</div>
				<div className="right-section">
					<img src="../../../assets/pic1.svg" alt="Books" />
				</div>
			</section>
		</>
	);
};

export default HeroSection;
