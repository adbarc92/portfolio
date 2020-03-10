import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
};



const makeDrawerList = () => {
	const list = ['Projects', 'Contact', 'About', 'Blog'];
	return(
		list.map((text, index) => (
			<ListItem>
				<ListItemIcon></ListItemIcon>
				<ListItemText primary={text}></ListItemText>
			</ListItem>
		));
	)
}

export default function SideBar() {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	return (
		<div>
			<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
			{makeDrawerList()}
			</Drawer>
		</div>
	);
}
