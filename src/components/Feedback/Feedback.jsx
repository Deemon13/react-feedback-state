import PropTypes from 'prop-types';

export const Feedback = ({ feeds, total, positive }) => {
	const { good, bad, neutral } = feeds;
	return (
		<>
			<p>Good: {good}</p>
			<p>Neutral: {neutral}</p>
			<p>Bad: {bad}</p>
			{total > 0 && <p>Total: {total}</p>}
			{positive > 0 && <p>Positive: {positive}%</p>}
		</>
	);
};

Feedback.propTypes = {
	feeds: PropTypes.objectOf(PropTypes.number),
	total: PropTypes.number,
	positive: PropTypes.number,
};
