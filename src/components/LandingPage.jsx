import React from 'react';
import NavigationBar from './NavigationBar';
import { Container, Row, Col } from 'reactstrap';
// import { Layout, Content, Header } from 'react-mdl';

const LandingPage = () => {
	return (
		<div className="page-container">
			<Container>
				<Row><NavigationBar></NavigationBar></Row>
			</Container>
		</div>
	);
}

export default LandingPage;
