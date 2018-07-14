import React from "react";
import { render } from "react-dom";
import injectSheet from "react-jss";

const titleStyles = {
	title: props => ({
    fontSize: 69,
    color: props.isActive ? '#24292e' : '#fff',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    width: 480,
    textAlign: 'center',
    margin: '0 0 25px',
	})
};

const Title = injectSheet(titleStyles)(({classes, children}) => (
	 <h1 className={classes.title}>{children}</h1>
));

export default Title;

