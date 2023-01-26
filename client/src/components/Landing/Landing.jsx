import React from 'react';
import classes from './Landing.module.css';
import Faq from "../Faq/Faq"

const Landing = () => {
	return (
		<div className={classes.landing_bg}>
			<Faq/>
		</div>
	)
};

export default Landing;
