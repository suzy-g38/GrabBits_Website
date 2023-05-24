import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/Logo.png'
import './Navbar.css';

const Navbar = () => {

	const opneMenu = () => {
		const navMenu = document.getElementById('nav-menu');

		navMenu.classList.add('show-menu');
	}

	const closeMenu = () => {
		const navMenu = document.getElementById('nav-menu');

		navMenu.classList.remove('show-menu');
	}


	return (
		<header className="header" id="header">
			<nav className="nav container">
				<NavLink to="/" className="nav__logo">
					<div className="brand">
						<div className="brand__logo">
							<img src={img} alt="logo" className="logo" />
						</div>
						<span className="brand__title">GrabBit</span>
					</div>
				</NavLink>
				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list grid">
						<li className="nav__item">
							<NavLink to="/" className="nav__link">
								<i className="uil uil-estate nav__icon"></i> Home
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/opportunities" className="nav__link">
								<i className="uil uil-bag nav__icon"></i> Opportunities
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/podcasts" className="nav__link">
								<i className="uil uil-megaphone nav__icon"></i> Podcast
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/team" className="nav__link">
								<i className="uil uil-user nav__icon"></i> About
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink to="/contact" className="nav__link">
								<i className="uil uil-at nav__icon"></i> Contact
							</NavLink>
						</li>
					</ul>
					<i className="uil uil-times nav__close" id="nav-close" onClick={() => closeMenu()}></i>
				</div>
				<div className="nav__btns">
					<div className="nav__toggle" id="nav-toggle" onClick={() => opneMenu()}>
						<i className="uil uil-apps"></i>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar