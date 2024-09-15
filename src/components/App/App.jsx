import { useEffect, useState } from 'react';
import { Description, Feedback, Options, Notification } from '../../components';

import styles from './App.module.css';

export const App = () => {
	const [feeds, setFeeds] = useState(() => {
		const savedFeeds = window.localStorage.getItem('feeds');

		if (savedFeeds !== null) {
			return JSON.parse(savedFeeds);
		}

		return {
			good: 0,
			neutral: 0,
			bad: 0,
		};
	});

	const totalFeedback = feeds.good + feeds.bad + feeds.neutral;
	const positiveFeedbacks = Math.round((feeds.good / totalFeedback) * 100);

	const updateFeedback = feedbackType => {
		setFeeds({ ...feeds, [feedbackType]: feeds[feedbackType] + 1 });
	};

	const resetFeedback = () => {
		setFeeds({ ...feeds, good: 0, neutral: 0, bad: 0 });
	};

	useEffect(() => {
		window.localStorage.setItem('feeds', JSON.stringify(feeds));
	}, [feeds]);

	return (
		<>
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
			{totalFeedback > 0 ? (
				<Feedback
					feeds={feeds}
					total={totalFeedback}
					positive={positiveFeedbacks}
				/>
			) : (
				<Notification />
			)}
		</>
	);
};
