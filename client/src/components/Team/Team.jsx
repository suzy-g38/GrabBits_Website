import React from 'react';
import classes from './Team.module.css';
import img from '../../assets/Team/photo2.png';

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
						src={img}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Product owner</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
				<div className={`${classes.team}  ${classes.member_2}`}>
					<img
						className={classes.img}
						id={classes.img_2}
						src={img}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Product owner</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
				<div className={`${classes.team}  ${classes.member_3}`}>
					<img
						className={classes.img}
						id={classes.img_3}
						src={img}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Product owner</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
				<div className={`${classes.team}  ${classes.member_4}`}>
					<img
						className={classes.img}
						id={classes.img_4}
						src={img}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Product owner</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
				<div className={`${classes.team}  ${classes.member_5}`}>
					<img
						className={classes.img}
						id={classes.img_5}
						src={img}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Product owner</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
				<div className={`${classes.team}  ${classes.member_6}`}>
					<img
						className={classes.img}
						id={classes.img_6}
						src={img}
						alt="Om Gawande"
					/>
					<span className={classes.position}>Product owner</span>
					<p className={classes.name}>Om Gawande</p>
				</div>
			</div>
		</>
	);
};

export default Team;
