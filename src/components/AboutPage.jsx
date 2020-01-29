import React from 'react';
import NavigationBar from './NavigationBar';

const AboutPage = () => {
	return (
		<div className="page-container">
			<NavigationBar />
			<img className="about-img" />
			<h1 className="about-header">About Page</h1>
			<div className="about-content">Page Content</div>
			<div className="base-content">Base Container</div>
		</div>
	);
}

export default AboutPage;
