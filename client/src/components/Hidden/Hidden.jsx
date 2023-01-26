import React from 'react';
import Contacts from './Contacts/Contacts';
import classes from './Hidden.module.css';
import PostJob from './PostJob/PostJob';

const Hidden = () => {
	return (
		<>
			<div className={classes.hidden}>
				<PostJob />
				<Contacts />
			</div>
		</>
	);
};

export default Hidden;
