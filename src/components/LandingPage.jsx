import React from 'react';
import NavigationBar from './NavigationBar';
import Symbol from '../../public/assets/Symbol.svg';

const LandingPage = () => {
	const home = false;
	const handleClick = () => {
		home = !home;
	};
	return (
		<div className="page-container">
			<NavigationBar
				pageTitle={'Landing'}
				handleClick={handleClick}
				home={home}
			/>
		</div>
	);
};

export default LandingPage;
