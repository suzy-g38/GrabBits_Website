import React from 'react';
import classes from './Landing.module.css';
import Grabby from '../common/Grabby/Grabby';

const Landing = () => {
	return (
		<>   
			<div className={classes.landingPage}>
				<Grabby/>
				<div className={classes.element}></div>
			</div>

			<div className={classes.landing_bg}></div>
		</>
	);
};

export default Landing;
