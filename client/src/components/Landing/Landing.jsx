import React from 'react';
import classes from './Landing.module.css';
import Grabby from '../common/Grabby/Grabby';
import Vector from '../../assets/Vector.png';
import { Button } from '../common';

const Landing = () => {
	return (
		<>
			<div className={classes.landingPage}>
				<span className={classes.mainTitle}>
					<span style={{ color: '#7541C8' }}>Opportunities</span> come and go{' '}
					<span style={{ color: '#7541C8' }}> grab yours</span>
				</span>
				<span className={classes.info}>
					Get the latest updates about internships, hackathons, job openings and
					much more..
				</span>
				<Button
					margin="0 0 0 55px"
					padding="8px 24px"
					fontSize="18px"
					label="Explore"
					bgColor="#7541C8"
				/>
				<span className={classes.grabby}>
					<Grabby className={classes.Grabby} />
				</span>
				<div className={classes.element}></div>
				<div className={classes.opp_container}>
					<div className={classes.circle1}></div>
					<div className={classes.circle2}></div>
					<span className={classes.title}>Opportunities</span>
					<div className={classes.button}>
						<span className={classes.b_title}>Just Grab It</span>
						<img src={Vector} className={classes.clicked} />
					</div>
				</div>
				<div className={classes.opp_container2}>
					<div className={classes.circle12}></div>
					<div className={classes.circle22}></div>
					<span className={classes.title2}>Opportunities</span>
					<div className={classes.button2}>
						<span className={classes.b_title2}>Just Grab It</span>
						<img src={Vector} className={classes.clicked2} />
					</div>
				</div>
			</div>

			<div className={classes.ge}></div>
		</>
	);
};

export default Landing;
