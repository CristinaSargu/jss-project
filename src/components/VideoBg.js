import React from "react";
import { render } from "react-dom";
import injectSheet from "react-jss";

import video from './../video/video.mp4';

const styles = {
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		overflow: 'hidden',

		'&::after': {
			display: 'block',
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		}
	},
	video: `
		max-width: 100%;
	`,
};

const VideoBg = injectSheet(styles)(({classes}) => (
	 <div className={classes.wrapper}>
	   <video autoPlay muted loop className={classes.video}>
	     <source src={video} type="video/mp4" />
	   </video>
	 </div>
));

export default VideoBg;

