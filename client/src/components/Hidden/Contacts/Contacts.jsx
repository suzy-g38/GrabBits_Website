import React, { useState, useEffect } from 'react';
import classes from './Contacts.module.css';
import axios from 'axios';

const Contacts = () => {
	const [contactsData, setContactsData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			axios.get('/contact/getContacts').then((response) => {
				const data = response.data.contacts;
				setContactsData(data);
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<h2 className={classes.heading}>Contacts</h2>
			<div className={classes.contacts}>
				{contactsData.map((c, i) => {
					return (
						<>
							<div className={classes.contact} key={i}>
								<p>Name:{c.name}</p>
								<p>Email:{c.email}</p>
								<p>Message:{c.message}</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Contacts;
