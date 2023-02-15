import React, { useState, useEffect } from 'react';
import classes from './Opportunities.module.css';
import { Card, Loader } from '../common';
import http from '../../api';
import Swal from 'sweetalert2';

const Opportunities = () => {
	const [jobData, setJobData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			http.get('/job/getJobs').then((response) => {
				const data = response.data.jobs;
				setJobData(data);
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Unable to fetch the jobs',
				text: error,
			});
		}
	};

	const search = async (e) => {
		let key = e.target.value;
		try {
			if (key) {
				let result = await http.get(`job/getJobs/${key}`);
				if (result) {
					setJobData(result.data.job);
				}
			} else {
				getData();
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Unable to search the jobs',
				text: error,
			});
		}
	};

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.searchbar_bg}>
					<input
						type="search"
						placeholder="Search here....."
						className={classes.search_bar}
						onChange={search}
					/>
					<i className="fa fa-search"></i>
				</div>
				{jobData.length === 0 ? (
					<div className={classes.loader}>
						<Loader />
					</div>
				) : (
					<div className={classes.cards}>
						{jobData.length > 0 ? (
							jobData.map((opp, i) => {
								return <Card data={opp} key={i} />;
							})
						) : (
							<p className={classes.no_job}>Currently no jobs found!</p>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Opportunities;
