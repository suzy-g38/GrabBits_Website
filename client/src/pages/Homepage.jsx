import React from 'react';
import Highlights from '../components/Highlights/Highlights';
import Swiper from '../components/Swiper/Swiper';
import Faq from '../components/Faq/Faq';
import { Landing } from '../components';
import Testimonial from '../components/Testimonials/Testimonial';
import { About } from '../components/About/About';
import Extra from '../components/Extra/Extra';

const Homepage = () => {
	return (
		<>
			<Landing />

			{/* <Extra /> */}

			{/* <Highlights /> */}
			{/* <About/> */}
			<Faq />

			{/* <Swiper /> */}
			{/* <Testimonial /> */}
		</>
	);
};

export default Homepage;
