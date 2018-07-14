import React from "react";
import { render } from "react-dom";
import injectSheet, { jss, ThemeProvider } from "react-jss";

import CenteredContent from './CenteredContent';
import VideoBg from './VideoBg';

const styles = {
	'@global body': {
	  margin: 0,
	},
  wrapper: `
    width: 100vw;
    height: 100vh;
  `,
};

const Page = injectSheet(styles)(({ classes }) => (
  <div className={classes.wrapper}>
  	<VideoBg />
    <CenteredContent />
  </div>
));


const theme = {};

const App = () => (
  <ThemeProvider theme={theme}>
    <Page />
  </ThemeProvider>
);

export default App;

