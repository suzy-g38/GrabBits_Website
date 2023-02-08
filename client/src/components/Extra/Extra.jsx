import React from 'react';
import { Button } from '../common';
import icon from '../../assets/verified.png';
import classes from '../Extra/Extra.module.css';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';
import icon4 from '../../assets/icon4.svg';
const Extra = () => {
	return (
		<>
			<div className={classes.extra_bg}>
				<div className={classes.wrapper}>
					<div className={classes.col1}>
						<div className={classes.box1}>
							<img src={icon4} alt="" />
							<h1 className={classes.number}>1.</h1>
							<h4 className={classes.head}>Opportunities</h4>
							<p className={classes.para}>Grab them..</p>
						</div>
						<div className={classes.box3}>
							<img src={icon3} alt="" />
							<h1 className={classes.number}>3.</h1>
							<h4 className={classes.head}>Motivation</h4>
							<p className={classes.para}>Uphold it..</p>
						</div>
					</div>
					<div className={classes.col2}>
						<div className={classes.box2}>
							<img src={icon2} alt="" />
							<h1 className={classes.number}>2.</h1>
							<h4 className={classes.head}>Podcasts</h4>
							<p className={classes.para}>Learn from them..</p>
						</div>

						<div className={classes.box4}>
							<img src={icon1} alt="" />
							<h1 className={classes.number}>4.</h1>
							<h4 className={classes.head}>Resources</h4>
							<p className={classes.para}>Use them..</p>
						</div>
					</div>
				</div>
				<div className={classes.content}>
					<div className={classes.head1}>
						Your dream job.
						<br /> Let’s make it happen
					</div>
					<div className={classes.head2}>Lorem ipsum dolor sit amet.</div>
					<div className={classes.butt}>
						<Button label="Learn More" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Extra;
