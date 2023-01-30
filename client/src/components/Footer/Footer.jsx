import React from 'react';
import classes from './Footer.module.css';
import img from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className={classes.outer_box}>
				<div className={classes.row1}>
					<NavLink to="/">
						<div className={classes.brand}>
							<div className={classes.brand_logo}>
								<img src={img} alt="logo" className={classes.logo} />
							</div>
							<span className={classes.brand_title}>GrabBit</span>
						</div>
					</NavLink>
					<div className={classes.social}>
						<h3 className={classes.social_text}>Find Us On Social Media:</h3>
						<ul className={classes.social_links}>
							<li className={classes.socia_link}>
								<a className={classes.link} href=""></a>
							</li>
							<li className={classes.socia_link}>
								<a className={classes.link} href=""></a>
							</li>
							<li className={classes.socia_link}>
								<a className={classes.link} href=""></a>
							</li>
							<li className={classes.socia_link}>
								<a className={classes.link} href=""></a>
							</li>
						</ul>
					</div>
					<div className={classes.text_mail}>
						<h2 className={classes.text}>We&apos;re Always Happy To Help</h2>
						<h2 className={classes.mail}>grabbitofficial@gmail.com</h2>
					</div>
				</div>
				<div className={classes.separator}></div>
				<div className={classes.row2}>Copyright © 2023 GrabBits</div>
			</div>
		</>
	);
};

export default Footer;
