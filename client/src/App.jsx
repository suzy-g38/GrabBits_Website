import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact, Footer, Landing, Navbar, Team } from './components';
import { Button, Card, Input } from './components/common';

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
				<Navbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
				<Input />
				<Button label="Search for Jobs" />
				<Card />
			{/* </div> */}
		</>
	);
};

export default App;
