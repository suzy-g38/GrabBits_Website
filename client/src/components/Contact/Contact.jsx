import React from 'react';
import classes from './Contact.module.css';
import { Input } from '../common';

const Contact = () => {
	return (
		<>
			<div className={classes.contact_form}>
				<h1 className={classes.title}>HELLO!</h1>
				<p className={classes.title_description}>HOW CAN WE HELP YOU ?</p>

				<div className={`${classes.query_section} ${classes.query_Msection}`}>
					<span className={classes.query_description}>I am interested in</span>
					<div className={classes.query_options}>
						<button className={classes.query_type}>carrers</button>
						<button className={classes.query_type}>sponsers</button>
						<button className={classes.query_type}>others</button>
					</div>
				</div>

				<div className={`${classes.user_info} ${classes.user_Minfo}`}>
					<span className={classes.info_description}>Contact Information</span>
					<div className={classes.user_info_fields}>
						<Input label="Your Name" className={classes.field_type} />
						<Input label="email" className={classes.field_type} />
					</div>
				</div>

				<div
					className={`${classes.message_section} ${classes.message_Msection}`}
				>
					<span className={classes.message}>Message</span>
					<Input label="message" className={classes.message_description} />
				</div>
			</div>
		</>
	);
};

export default Contact;
