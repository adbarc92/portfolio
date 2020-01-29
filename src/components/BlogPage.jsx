import React from 'react';
import NavigationBar from './NavigationBar';

const BlogPage = () => {
	return (
		<div className="page-container">
			<NavigationBar />
			<img className="blog-img" />
			<h1 className="blog-header">Blog Page</h1>
			<div className="blog-content">Page Content</div>
			<div className="base-content">Base Container</div>
		</div>
	);
}

export default BlogPage;
