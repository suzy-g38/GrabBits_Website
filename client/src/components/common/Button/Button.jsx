import React from 'react';
import classes from './Button.module.css';
import grabby from '../../../assets/grabby.png';

const Button = ({
	children,
	onClick,
	label,
	disabled,
	filled,
	padding = '15px 30px',
	fontSize = '20px',
	bgColor,
}) => {
	return (
		<>
			<div className={classes.btn_container}>
				<button
					style={{
						padding: padding,
						fontSize: fontSize,
						backgroundColor: bgColor,
					}}
					className={filled ? classes.fill : classes.btn}
					onClick={onClick}
					disabled={disabled}
				>
					{label || children}
				</button>
				<img className={classes.img} src={grabby} alt="grabby" />
			</div>
		</>
	);
};

export default Button;
