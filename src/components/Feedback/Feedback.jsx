export const Feedback = ({ feeds, total, positive }) => {
	return (
		<>
			<p>Good: {feeds.good}</p>
			<p>Neutral: {feeds.neutral}</p>
			<p>Bad: {feeds.bad}</p>
			{total > 0 && <p>Total: {total}</p>}
			{positive > 0 && <p>Positive: {positive}%</p>}
		</>
	);
};
