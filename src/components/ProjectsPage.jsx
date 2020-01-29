import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

const ProjectsPage = () => {
	return (
		<div className="page-container">
			<NavigationBar />
			<img className="projects-img" />
			<h1 className="projects-header">Projects Page</h1>
			<div className="projects-content">Page Content</div>
			<div className="base-content">Base Container</div>
		</div>
	);
}

export default ProjectsPage;
