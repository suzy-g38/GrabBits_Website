import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Opportunities.module.css';
import { Card } from '../common';

const Opportunities = () => {
	const [jobData, setJobData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const data = await axios.get('/job/getJobs').then((response) => {
				const data = response.data.jobs;
				console.log(data);
				setJobData(data);
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className={classes.cards}>
				{jobData.map((opp, i) => {
					return <Card data={opp} key={i} />;
				})}
			</div>
		</>
	);
};

export default Opportunities;
