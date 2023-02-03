import React, { useState, useEffect } from 'react';
import { Button } from '../../common';
import classes from './Contacts.module.css';
import axios from 'axios';

const Contacts = () => {
	const [contactsData, setContactsData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const deleteAllContacts = async () => {
		try {
			axios.delete('/contact/deleteContacts');
		} catch (err) {
			console.log(err);
		}
	};

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
			<Button label="Delete All Contacts" onClick={deleteAllContacts} />

			<div className={classes.contacts}>
				{contactsData?.map((c, i) => {
					return (
						<>
							<div className={classes.contact} key={i}>
								<p>Name:{c.name}</p>
								<p>Email:{c.email}</p>
								<p>Message:{c.message}</p>
								<p>Phone Number:{c.phoneNo}</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Contacts;
