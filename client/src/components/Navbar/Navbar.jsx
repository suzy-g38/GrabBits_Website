import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button/Button';
import img from '../../assets/Logo.png';
import { useState } from 'react';

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			<nav className={classes.navbar}>
				<NavLink to="/">
					<div className={classes.brand}>
						<div className={classes.brand_logo}>
							<img src={img} alt="logo" className={classes.logo} />
						</div>
						<span className={classes.brand_title}>GrabBit</span>
					</div>
				</NavLink>

				<ul
					className={
						active
							? `${classes.navbar_items} ${classes.navbar_mitems}`
							: `${classes.navbar_items}`
					}
				>
					<li className={`${classes.navbar_item} `}>
						<NavLink to="/" className={classes.main_item}>
							Home
						</NavLink>
					</li>
					<li className={`${classes.navbar_item} `}>
						<NavLink to="/team">About Us</NavLink>
					</li>
					<li className={`${classes.navbar_item} `}>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
				<div
					className={classes.hamburger}
					onClick={() => {
						setActive((prevValue) => !prevValue);
					}}
				>
					<svg
						className={
							active
								? `${classes.ham} ${classes.hamRotate} ${classes.ham1} ${classes.active}`
								: `${classes.ham} ${classes.hamRotate} ${classes.ham1}`
						}
						viewBox="0 0 100 100"
						width="80"
					>
						<path
							className={`${classes.line} ${classes.top}`}
							d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
						/>
						<path
							className={`${classes.line} ${classes.middle}`}
							d="m 30,50 h 40"
						/>
						<path
							className={`${classes.line} ${classes.bottom}`}
							d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
						/>
					</svg>
				</div>

				{/* <div className={classes.navbar_search_tab}>
				<span><input type="text" className={classes.navbar_search} placeholder="Search for jobs"/></span>
			</div> */}
			</nav>
		</>
	);
};

export default Navbar;
