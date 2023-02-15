import {React, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	Contact,
	Footer,
	Navbar,
	Team,
	Opportunities,
	Hidden,
	Podcast,
} from './components';
import { Popup } from './components/common';
import Grabby from './components/common/Grabby/Grabby';
import Homepage from './pages/Homepage';

const App = () => {
	return (
		<>
			{/* <div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					gap: '50px',
					margin: '100px 0',
				}}
			> */}
			<Popup />
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/team" element={<Team />} />
				<Route path="/opportunities" element={<Opportunities />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/podcasts" element={<Podcast />} />
				<Route path="/hidden" element={<Hidden />} />
				<Route path="/grabby" element={<Grabby />} />
			</Routes>
			<Footer />
			{/* <Input />
			<Button label="Search for Jobs" />*/}
			{/* <Card /> */}
			{/* </div> */}
		</>
	);
};

export default App;
