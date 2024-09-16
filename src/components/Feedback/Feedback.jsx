import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

export const Feedback = ({ feedbacks, total, positive }) => {
	const { good, bad, neutral } = feedbacks;
	return (
		<ul className={styles.feedback}>
			<li className={styles.feedback__item}>
				<p className={styles.feedback__value}>Good: {good}</p>
			</li>
			<li className={styles.feedback__item}>
				<p className={styles.feedback__value}>Neutral: {neutral}</p>
			</li>
			<li className={styles.feedback__item}>
				<p className={styles.feedback__value}>Bad: {bad}</p>
			</li>
			<li className={styles.feedback__item}>
				{total > 0 && <p className={styles.feedback__value}>Total: {total}</p>}
			</li>
			<li className={styles.feedback__item}>
				{total > 0 && (
					<p className={styles.feedback__value}>Positive: {positive}%</p>
				)}
			</li>
		</ul>
	);
};

Feedback.propTypes = {
	feedbacks: PropTypes.objectOf(PropTypes.number),
	total: PropTypes.number,
	positive: PropTypes.number,
};
