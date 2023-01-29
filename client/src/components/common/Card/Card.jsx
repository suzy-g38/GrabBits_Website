import React from 'react';
import classes from './Card.module.css';
import verified from '../../../assets/verified.png';
// import google from '../../../assets/google.png';
import { Button } from '../../common/index';

const Card = ({ data, image }) => {
	console.log(image);
	// useEffect(() => {}, []);

	const { role, location, companyName, stipend, batch, description } = data;
	return (
		<>
			<div className={classes.outer_container}>
				<div className={classes.inner_container}>
					<div className={classes.data}>
						<div className={classes.company_container}>
							<img
								className={classes.company_image}
								src={`data:image/jpeg;base64, ${image}`}
								// src={image}
								alt="company_image"
							/>
							<h1 className={classes.name}>{companyName}</h1>
						</div>
						<img className={classes.verified} src={verified} alt="verified" />
					</div>
					<div className={classes.tags}>
						<span className={classes.tag}>{role}</span>
						<span className={classes.tag}>{stipend}</span>
						<span className={classes.tag}>{batch}</span>
						<span className={classes.tag}>{location}</span>
					</div>
					<div className={classes.description}>{description}</div>
					<div className={classes.apply}>
						<Button bgColor="#7541C8" label="APPLY NOW" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
