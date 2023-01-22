import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact, Footer, Landing, Navbar, Team } from './components';
// import { Button , Card , Input } from './components/common'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/team" element={<Team />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
