import React from "react";
import { render } from "react-dom";
import injectSheet from "react-jss";

import logo from './../img/logo.png';

const styles = {
	logo: `
		width: 250px;
		height: 250px;
		display: block;
		margin: 0 auto 50px;
	`,
};

const Logo = injectSheet(styles)(({classes}) => (
	 <img src={logo} className={classes.logo} />
));

export default Logo;

