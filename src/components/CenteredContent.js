import React from "react";
import { render } from "react-dom";
import injectSheet from "react-jss";

import Logo from './Logo';
import Title from './Title';
import Description from './Description';

const styles = {
	wrapper: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)'
	},
};

const CenteredContent = injectSheet(styles)(({classes}) => (
	 <div className={classes.wrapper}>
	   <Logo />
	   <Title>JSS demo give it a try.</Title>
	   <Description>Made for awesome people.</Description>
	 </div>
));

export default CenteredContent;

