import { useEffect, useState } from 'react';
import { Description, Feedback, Options, Notification } from '../../components';

import styles from './App.module.css';

export const App = () => {
	const [feedbacks, setFeedbacks] = useState(() => {
		const savedFeedbacks = window.localStorage.getItem('feedbacks');

		if (savedFeedbacks !== null) {
			return JSON.parse(savedFeedbacks);
		}

		return {
			good: 0,
			neutral: 0,
			bad: 0,
		};
	});

	const totalFeedback = feedbacks.good + feedbacks.bad + feedbacks.neutral;
	const positiveFeedbacks = Math.round((feedbacks.good / totalFeedback) * 100);

	const updateFeedback = feedbackType => {
		setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
	};

	const resetFeedback = () => {
		setFeedbacks({ ...feedbacks, good: 0, neutral: 0, bad: 0 });
	};

	useEffect(() => {
		window.localStorage.setItem('feeds', JSON.stringify(feedbacks));
	}, [feedbacks]);

	return (
		<div className={styles.container}>
			<Description
				title="Sip Happens Café"
				descr="Please leave your feedback about our service by selecting one of the
				options below."
			/>
			<Options
				handleClick={updateFeedback}
				total={totalFeedback}
				handleReset={resetFeedback}
			/>
			<section className={styles.feedback}>
				{totalFeedback > 0 ? (
					<Feedback
						feedbacks={feedbacks}
						total={totalFeedback}
						positive={positiveFeedbacks}
					/>
				) : (
					<Notification />
				)}
			</section>
		</div>
	);
};
