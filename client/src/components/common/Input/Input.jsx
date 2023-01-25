import React from 'react';
import classes from './Input.module.css';

const Input = ({
	value,
	label = 'Undefined',
	reference,
	name,
	// placeholder = 'und',
	type = 'text',
	onChange,
	required = 'required',
	error = '',
}) => {
	return (
		<>
			<div className={classes.container}>
				<input
					ref={reference}
					type={type}
					value={value}
					name={name}
					className={classes.input}
					// placeholder={placeholder}
					required={required}
					onChange={onChange}
				/>
				<label className={classes.label}>{label}</label>
				<i className={classes.i}></i>
				{error && (
					<p className={classes.error}>
						{/* <img className={classes.errorpng} src={errorpng} alt="error" /> */}
						{error}
					</p>
				)}
			</div>
		</>
	);
};

export default Input;
