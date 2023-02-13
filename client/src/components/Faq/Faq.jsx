import { React, useState } from 'react';
import classes from './Faq.module.css';

const data = [
	{
		question: 'Is this for engineering students only?',
		answer:
			'Nope. If you are eligible for the role according to  the provided criteria you can also apply for the same.'
	},
	{
		question: 'What kind of resources do you provide?',
		answer:
			'The resources related to coding can help you to learn it in a better way. Till now we have covered up - Remote job websites, best coding  websites, and best gaming websites for programmers, etc.',
	},
	{
		question: 'I ain’t active on Instagram, how can I access the resources & updates that you’re providing?',
		answer:
			'Not to worry. We are active on Twitter, LinkedIn & WhatsApp also , so you can connect with us from any compatible platform.',
	},
	{
		question: 'What kind of podcasts do you make?',
		answer: 'The podcast basically includes experience of individuals from industry folks, guiding students with their experience and sharing tips and tricks for a college student to grab a job offer.',
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
					<h3 className={classes.faq_heading1}>Do You Have Any Questions?</h3>
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
