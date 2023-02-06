import React from 'react';
import { Button } from '../common';
import icon from '../../assets/verified.png';
import classes from '../Extra/Extra.module.css';

const Extra = () => {
	return (
		<>
			<div className={classes.extra_bg}>
				<div className={classes.wrapper}>
					<div className={classes.box1}>
						<img src={icon} alt="" />
						<h1 className={classes.number}>1.</h1>
						<div className={classes.head}>
							<h4>Lorem ipsum dolor</h4>
						</div>
						<p className={classes.para}>
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className={classes.box2}>
						<img src={icon} alt="" />
						<h1 className={classes.number}>2.</h1>
						<div className={classes.head}>
							<h4>Lorem ipsum dolor</h4>
						</div>
						<p className={classes.para}>
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className={classes.box3}>
						<img src={icon} alt="" />
						<h1 className={classes.number}>3.</h1>
						<div className={classes.head}>
							<h4>Lorem ipsum dolor</h4>
						</div>
						<p className={classes.para}>
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className={classes.box4}>
						<img src={icon} alt="" />
						<h1 className={classes.number}>4.</h1>
						<div className={classes.head}>
							<h4>Lorem ipsum dolor</h4>
						</div>
						<p className={classes.para}>
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
				</div>
				<div className={classes.content}>
					<div className={classes.head1}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
						numquam eos quisquam ut optio iure ad omnis voluptates eaque culpa?
					</div>
					<div className={classes.head2}>Lorem ipsum dolor sit amet.</div>
					<div className={classes.butt}>
						<Button />
					</div>
				</div>
			</div>
		</>
	);
};

export default Extra;
