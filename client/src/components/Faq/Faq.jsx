import { React, useState } from 'react';
import classes from './Faq.module.css';

const data = [
	{
		question: 'Who can join DRAIC?',
		answer:
			'Any student of DYPCOE college with an aptitude for learning and applying those skills in the field of robotics and AI can join us, irrespective of the branch or year they are studying in! ',
	},
	{
		question: 'How to join DRAIC?',
		answer:
			'We as a club conduct recruitment for all the departments annually. By having basic knowledge and skills about the department you want to get in, you can clear the recruitment rounds and join us! Again, it’s not a compulsion to be in a particular branch to get into a department!!',
	},
	{
		question: 'What can you expect from DRAIC?',
		answer:
			'You’ll learn technical and personal skills, get the experience of working as a team, get freedom and support to explore new projects, and much more!',
	},
	{
		question: 'What are our working hours?',
		answer: 'DRAIC has flexible working hours usually after college',
	},
];

const Faq = () => {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	return (
		<div className={classes.outerfaq}>
			<div className={classes.firstrow}>
				<div className={classes.faq_heading}>
					<h3 className={classes.faq_heading1}>DO YOU HAVE SOME QUESTIONS?</h3>
					<p className={classes.faq_heading2}>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className={classes.wrapper}>
					<div className={classes.accordion}>
						{data.map((item, i) => (
							<div key={i} className={classes.item}>
								<div className={classes.ac_title} onClick={() => toggle(i)}>
									<h2 className={classes.faq_question}>{item.question}</h2>
									<span className={classes.faq_sign}>
										{selected === i ? '-' : '+'}
									</span>
								</div>
								<div
									className={
										selected === i
											? `${classes.content} ${classes.show}`
											: `${classes.content}`
									}
								>
									{item.answer}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
