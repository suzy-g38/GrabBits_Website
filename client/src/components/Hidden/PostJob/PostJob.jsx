import React, { useState } from 'react';
import classes from './PostJob.module.css';
import { Button, Input } from '../../common';
import axios from 'axios';

const PostJob = () => {
	const [job, setJob] = useState({
		role: '',
		location: '',
		stipend: '',
		companyName: '',
		batch: '',
	});

	const { role, location, stipend, companyName, batch } = job;

	const onChangeHandler = (e) => {
		setJob({
			...job,
			[e.target.name]: e.target.value,
		});
		console.log(job);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (
			role === '' ||
			location === '' ||
			stipend === '' ||
			companyName === '' ||
			batch === ''
		) {
			// AlertContext.setAlert("Please enter all fields", "danger"); add a state
			alert('please fill all filed');
		}
		try {
			axios.post('/job/createJob', job).then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2 className={classes.heading}>Post a Job</h2>

			<form className={classes.form} onSubmit={submitHandler}>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={role}
					label="Role"
					name="role"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={location}
					label="Location"
					name="location"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={companyName}
					label="Company Name"
					name="companyName"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={stipend}
					label="Stipend"
					name="stipend"
					required
				/>
				<Input
					onChange={onChangeHandler}
					type="text"
					value={batch}
					label="Batch"
					name="batch"
					required
				/>
				<Button label="Create" />
			</form>
		</>
	);
};

export default PostJob;
