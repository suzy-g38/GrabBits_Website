import React, { useState, useEffect } from 'react';
import classes from './Popup.module.css';
import { Button } from '../index';
import whatsapp from '../../../assets/Socials/whatsapp.svg';
import cross from '../../../assets/cross.svg';

const Popup = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 5000); // 5000 milliseconds = 5 seconds
	}, []); // Only run the useEffect once, on mount

	if (!isVisible) {
		return null;
	}
	const closePopup = () => {
		setIsVisible(false);
	};

	return (
		<>
			<div className={classes.blur}>
				<div className={classes.card}>
					<img
						className={classes.close}
						onClick={() => {
							closePopup();
						}}
						src={cross}
						alt="close"
					/>
					<h2 className={classes.text}>Join Our Whatsapp Group</h2>
					<h1 className={classes.subtext}>
						Stay updated with all the opportunites.
					</h1>
					<div className={classes.btn_container}>
					<a href="https://chat.whatsapp.com/KBxP1M7GT7mCh4PORsfN0H" target="blank">
						<Button bgColor="#25D366">
							<img className={classes.btn_svg} src={whatsapp} alt="whatsapp" />
							<span className={classes.btn_text}>Whatsapp</span>
						</Button>
					</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Popup;
