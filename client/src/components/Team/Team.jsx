import React from 'react';
import classes from './Team.module.css';
import Bhushan from '../../assets/Team/Bhushan.png';
import Sanyog from '../../assets/Team/Sanyog.png';
import Saurabh from '../../assets/Team/Saurabh.png';
import Sapna from '../../assets/Team/Sapna.png';
import Om from '../../assets/Team/Om.png';
import Unknown from '../../assets/Team/Unknown.png';

const Team = () => {
	return (
		<>
			<div className={classes.main}>
				<div className={classes.item}>
					<h1 className={classes.main_title}>The creative crew</h1>
				</div>
				<div className={`${classes.item}  ${classes.right_section}`}>
					<h2 className={classes.secondary_title}>Who we are</h2>
					<p className={classes.description}>
						We are a team of creatively diverse. driven. innovative individuals
						working in various locations from the world.
					</p>
				</div>
			</div>

			<div className={classes.team_members}>
				<div className={`${classes.team}  ${classes.member_1}`}>
					<img
						className={classes.img}
						id={classes.img_1}
						src={Bhushan}
						alt="Bhushan Kale"
					/>
					<span className={classes.position}>Unknown</span>
					<p className={classes.name}>Bhushan Kale</p>
				</div>
				<div className={`${classes.team}  ${classes.member_2}`}>
					<img
						className={classes.img}
						id={classes.img_2}
						src={Sanyog}
						alt="Sanyog Mahajan"
					/>
					<span className={classes.position}>Unknown</span>
					<p className={classes.name}>Sanyog Mahajan</p>
				</div>
				<div className={`${classes.team}  ${classes.member_3}`}>
					<img
						className={classes.img}
						id={classes.img_3}
						src={Saurabh}
						alt="Saurabh Barde"
					/>
					<span className={classes.position}>Unknown</span>
					<p className={classes.name}>Saurabh Barde</p>
				</div>
				<div className={`${classes.team}  ${classes.member_4}`}>
					<img
						className={classes.img}
						id={classes.img_4}
						src={Sapna}
						alt="Sapna Kul"
					/>
					<span className={classes.position}>Unknown</span>
					<p className={classes.name}>Sapna Kul</p>
				</div>
				<div className={`${classes.team}  ${classes.member_5}`}>
					<img
						className={classes.img}
						id={classes.img_5}
						src={Om}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Unknown</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
				<div className={`${classes.team}  ${classes.member_6}`}>
					<img
						className={classes.img}
						id={classes.img_6}
						src={Unknown}
						alt="Unknown"
					/>
					<span className={classes.position}>Unknown</span>
					<p className={classes.name}>Unknown</p>
				</div>
			</div>
		</>
	);
};

export default Team;
