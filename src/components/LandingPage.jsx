import React from 'react';
import NavigationBar from './NavigationBar';

const LandingPage = () => {
	return (
		<div className="page-container">
			<NavigationBar />
			<img className='landing-img' />
			<h1 className='landing-header'>Landing Page</h1>
			<div className='landing-content'>Page Content</div>
			<div className='base-content'>Base Container</div>
		</div>
	);
}

export default LandingPage;
