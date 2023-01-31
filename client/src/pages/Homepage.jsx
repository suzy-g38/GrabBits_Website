import React from 'react';
import Highlights from '../components/Highlights/Highlights';
import Swiper from '../components/Swiper/Swiper';
import Faq from '../components/Faq/Faq';
import { Landing } from '../components';
import Testimonial from '../components/Testimonials/Testimonial';
import {About} from '../components/About/About';
const Homepage = () => {
	return (
		<>
			<Landing />
			
			<Highlights />
			<Faq />
			<About/>
			{/* <Swiper /> */}
			{/* <Testimonial /> */}
		</>
	);
};

export default Homepage;
