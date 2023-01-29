import React, { useState } from 'react';
import classes from './Contact.module.css';
import axios from 'axios';

import { Button, Input, Textarea } from '../common';
import {
	FaLocationArrow,
	FaEnvelope,
	FaMobileAlt,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phoneNo: '',
		message: '',
	});

	const { name, email, phoneNo, message } = contact;

	const onChangeHandler = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
		console.log(contact);
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		if (name === '' || email === '' || phoneNo === '' || message === '') {
			// AlertContext.setAlert("Please enter all fields", "danger"); add a state
			alert('Please fill all  the fields');
		}
		try {
			axios.post('/contact/createContact', contact).then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className={classes.container}>
				<div className={classes.form}>
					<div className={classes.contact_info}>
						<h3 className={classes.title}>Lets Get in Touch</h3>
						<p className={classes.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim
							distinctio nostrum possimus in dolor beatae, illo iusto! Incidunt
							cum aliquid exercitationem, maxime optio vero pariatur suscipit
							explicabo nesciunt. Debitis.
						</p>
						<div className={classes.info}>
							<div className={classes.information}>
								<FaLocationArrow className={classes.icon} />
								<p>lorem</p>
							</div>
							<div className={classes.information}>
								<FaEnvelope className={classes.icon} />
								<p>lorem</p>
							</div>
							<div className={classes.information}>
								<FaMobileAlt className={classes.icon} />
								<p>lorem</p>
							</div>
						</div>

						<div className={classes.social_media}>
							<p>Connect with us : </p>
							<div className={classes.social_icons}>
								<a href="https://www.instagram.com/grabbits_/" target="blank">
									<FaInstagram />
								</a>
								<a
									href="https://www.linkedin.com/company/grabbits/"
									target="blank"
								>
									<FaLinkedinIn />
								</a>
								<a href="https://twitter.com/grabbits_" target="blank">
									<FaTwitter />
								</a>
							</div>
						</div>
					</div>

					<div className={classes.contact_form}>
						<span className={`${classes.circle} ${classes.one}`}></span>
						<span className={`${classes.circle} ${classes.two}`}></span>

						<form onSubmit={submitHandler}>
							<h3 className={classes.title}>Contact Us</h3>
							<Input
								onChange={onChangeHandler}
								type="text"
								value={name}
								label="Name"
								name="name"
								required
							/>
							<Input
								onChange={onChangeHandler}
								type="text"
								value={email}
								label="Email"
								name="email"
								required
							/>
							<Input
								onChange={onChangeHandler}
								type="text"
								value={phoneNo}
								label="Mobile Number"
								name="phoneNo"
								required
							/>
							<Textarea
								onChange={onChangeHandler}
								type="text"
								value={message}
								label="Your Message"
								name="message"
								required
							/>

							<div className={classes.button}>
                <Button
								padding="8px 24px"
								fontSize="18px"
								label="Send"
								bgColor="#7541C8"
                
							/></div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
