import React from 'react';
import classes from './Footer.module.css';
import img from '../../assets/Logo.png';

const Footer = () => {
	return (
		<>
		   <div className={classes.container}>
				<div className={`${classes.container_subitem1}`}>
				  <div className={classes.brand_logo}><img src={img} alt="logo" className={classes.logo}/></div>
                  <span className={classes.brand_title}>GrabBit</span>
				</div>
				<div>
					
				</div>
				<div>

				</div>

		   </div>
		</>
	)
};

export default Footer;
