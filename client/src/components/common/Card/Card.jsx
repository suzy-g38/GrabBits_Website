import React, { useState, useEffect } from 'react';
import classes from './Card.module.css';
import verified from '../../../assets/verified.png';
import { Button } from '../../common/index';
import {
	BsFillBookmarkCheckFill,
	BsFillBookmarkDashFill,
} from 'react-icons/bs';

const Card = ({
	data,
	imgPreview,
	show,
	handleAddBookMark,
	handleDeleteBookMark,
}) => {
	const {
		role,
		location,
		companyName,
		stipend,
		batch,
		description,
		link,
		image,
		category,
	} = data;

	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		let bookmarkedData = JSON.parse(localStorage.getItem('grabbit-bookmarks'));
		if (bookmarkedData !== null)
			for (let index = 0; index < bookmarkedData.length; index++) {
				if (bookmarkedData[index]._id === data._id) {
					setIsSaved(true);
				}
			}
	}, []);

	const handleSave = () => {
		if (isSaved === true) {
			//to delete a certain bookmark
			handleDeleteBookMark(data._id);
			setIsSaved(false);
		} else {
			//to add a certain bookmark
			handleAddBookMark(data);
			setIsSaved(true);
		}
	};

	return (
		<>
			{/* {category} */}
			<div className={classes.outer_container}>
				<details className={classes.inner_container}>
					<summary className={classes.data}>
						<div className={classes.extra_container}>
							<div className={classes.company_container}>
								{show ? (
									<div className={classes.company_img_container}>
										<img
											className={classes.company_image}
											src={imgPreview}
											alt="company_image"
										/>
									</div>
								) : (
									<div className={classes.company_img_container}>
										<img
											className={classes.company_image}
											src={`data:image/png;base64, ${image}`}
											alt="company_image"
										/>
									</div>
								)}

								<h1 className={classes.name}>{companyName}</h1>
							</div>
							<img className={classes.verified} src={verified} alt="verified" />
						</div>
						<div className={classes.tags}>
							<span className={classes.tag}>{role}</span>
							<span className={classes.tag}>{stipend}</span>
							<span className={classes.tag}>{batch}</span>
							<span className={classes.tag}>{location}</span>
							<span style={{ marginTop: '8px' }} onClick={() => handleSave()}>
								{isSaved ? (
									<BsFillBookmarkCheckFill
										style={{ color: 'white', fontSize: '1.7rem' }}
									/>
								) : (
									<BsFillBookmarkDashFill
										style={{ color: 'white', fontSize: '1.7rem' }}
									/>
								)}
							</span>
						</div>
					</summary>
					<div className={classes.description}>{description}</div>
					<div className={classes.apply}>
						<Button link={link} bgColor="#7541C8" label="APPLY NOW" />
					</div>
				</details>
			</div>
		</>
	);
};

export default Card;
