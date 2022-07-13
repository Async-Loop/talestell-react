import React from 'react';
import './feature.styles.css';
const FeatureSection = () => {
	const featureItems = [
		{
			id: 1,
			imgUrl: '../../../assets/book_tracking.svg',
			heading: 'Book Tracking',
			subHeading: 'Track the progress from your profile'
		},
		{
			id: 2,
			imgUrl: '../../../assets/discover.svg',
			heading: 'Discover',
			subHeading: 'Find the countless number of books'
		},
		{
			id: 3,
			imgUrl: '../../../assets/community.svg',
			heading: 'Community',
			subHeading: 'Be part of the largest community of readers'
		}
	];

	return (
		<>
			<section className="container section-two">
				<h2 className="section-two-title">Features</h2>

				<div className="feature-list">
					{featureItems.map((featureItem) => (
						<div key={featureItem.id} className="feature-item">
							<div className="feature-img-container">
								<img
									src={featureItem.imgUrl}
									width="50"
									height="50"
									alt="Book Tracking"
								/>
							</div>
							<div className="feature-text-container">
								<h4>{featureItem.heading}</h4>
								<p>{featureItem.subHeading}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default FeatureSection;
