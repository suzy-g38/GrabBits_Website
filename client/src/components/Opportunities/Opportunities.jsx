import React, { useState, useEffect } from 'react';
import classes from './Opportunities.module.css';
import { Button, Card, Loader } from '../common';
import http from '../../api';
import Swal from 'sweetalert2';

import ReactGA from 'react-ga4';
import ThemeButton from '../common/ThemeButton/ThemeButton';

const Opportunities = () => {
	const [jobData, setJobData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		ReactGA.send('pageview');
		getData();
	}, []);

	const getData = async () => {
		try {
			http.get('/job/getJobs').then((response) => {
				const data = response.data.jobs;
				setLoading(false);
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
	const filterData = (filterBy) => {
		const filteredData = jobData.filter((job) => {
			return job.category === filterBy;
		});
		setJobData(() => filteredData);
		console.log(filterBy, filteredData, jobData);
	};

	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.search_filter}>
					<div>
						<ThemeButton onClick={() => filterData('Jobs')} label="Jobs" />
						<ThemeButton
							onClick={() => filterData('Hackathons')}
							label="Hackathons"
						/>
						<ThemeButton
							onClick={() => filterData('Interns')}
							label="Interns"
						/>
						{/* <ThemeButton onClick={()=>filterData('Others')} label="Others" /> */}
					</div>
					<div className={classes.searchbar_bg}>
						<input
							type="search"
							placeholder="Search here....."
							className={classes.search_bar}
							onChange={search}
						/>
						<i className="fa fa-search"></i>
					</div>
				</div>
				<h1 className={classes.text}>Opportunities</h1>
				{loading && (
					<div className={classes.loader}>
						<Loader />
					</div>
				)}
				{!loading && jobData.length && (
					<div className={classes.cards}>
						{jobData.map((opp, i) => {
							return <Card data={opp} key={i} />;
						})}
					</div>
				)}
				{!loading && !jobData.length && (
					<div className={classes.cards}>
						<p className={classes.no_job}>Currently no opportunities found!</p>
					</div>
				)}
				{/* {jobData.length === 0 ? (
					<div className={classes.loader}>
						<Loader />
					</div>
				) : (
					<>
						<div className={classes.cards}>
							{jobData.length > 0 ? (
								jobData.map((opp, i) => {
									return <Card data={opp} key={i} />;
								})
							) : (
								<p className={classes.no_job}>Currently no jobs found!</p>
							)}
						</div>
					</>
				)} */}
			</div>
		</>
	);
};

export default Opportunities;
