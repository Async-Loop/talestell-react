import React from 'react';
import '../../pages/HomePage.styles.css';
const AboutSection = () => {
	return (
		<>
			<section className="container section-three">
				<div className="objective-img">
					<img src="../../../assets/objective.svg" alt="Objective" />
				</div>
				<div className="objective-text">
					<h2 className="objective-header">Objective of our team</h2>
					<p className="objective-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci
						distinctio dicta! Delectus fuga libero, similique distinctio repellat
						pariatur illo repudiandae nobis minima blanditiis molestiae iusto nulla
						consectetur? Quia, quibusdam.
					</p>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
