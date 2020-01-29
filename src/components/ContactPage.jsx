import React from 'react';
import NavigationBar from './NavigationBar';

const ContactPage = () => {
	return (
		<div className="page-container">
			<NavigationBar />
			<img className="contact-img" />
			<h1 className="contact-header">Contact Page</h1>
			<div className="contact-content">Page Content</div>
			<div className="base-content">Base Container</div>
		</div>
	);
}

export default ContactPage;
