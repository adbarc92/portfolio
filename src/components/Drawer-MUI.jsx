import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { Drawer, Button, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
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

	const SideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{['Projects', 'Contact', 'About', 'Blog'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary={text}></ListItemText>
					</ListItem>
				))}
			</List>
		</div>
	);

	const SideBar = side => {
		return (
			<div>
				<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
					{SideList('left')}
				</Drawer>
			</div>
		);
	};
}
