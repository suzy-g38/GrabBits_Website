import React from 'react';
import Highlights from '../Highlights/Highlights';
import classes from './Landing.module.css';
import Faq from '../Faq/Faq';
import Testimonial from '../Testimonials/Testimonial';


const Landing = () => {
	return (
		<>
			<div className={classes.landing_bg}>
				{/* <Highlights /> */}
				{/* <Faq /> */}
				<Testimonial />
			</div>
		</>
	);
};

export default Landing;
