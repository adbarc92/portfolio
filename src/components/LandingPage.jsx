import React from 'react';
import NavigationBar from './NavigationBar';
// import SideBar from './SideBar';
import { Layout, Content, Header } from 'react-mdl';

const LandingPage = () => {
	return (
		<div className="page-container">
			<Layout>
				<Header transparent title="Landing Page">
					<NavigationBar />
				</Header>
				{/* <SideBar /> */}
				<Content>Content</Content>
			</Layout>
		</div>
	);
}

export default LandingPage;
