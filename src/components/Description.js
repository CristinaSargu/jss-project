import React from "react";
import { render } from "react-dom";
import injectSheet from "react-jss";

const styles = {
	description: props => ({
    fontSize: 18,
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    margin: 0,
	})
};

const Description = injectSheet(styles)(({classes, children}) => (
	 <p className={classes.description}>{children}</p>
));

export default Description;

