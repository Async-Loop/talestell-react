import React from 'react';
import './about.styles.css';
const AboutSection = () => {
	return (
		<>
			<section className="section-three">
				<div className="container row">
					<div className="image-container">
						<img src="../../../assets/objective.svg" alt="Objective" />
					</div>
					<div className="text-container">
						<h2 className="section-heading">Objective of our team</h2>
						<p className="section-subtxt">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci
							distinctio dicta! Delectus fuga libero, similique distinctio repellat
							pariatur illo repudiandae nobis minima blanditiis molestiae iusto nulla
							consectetur? Quia, quibusdam.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
