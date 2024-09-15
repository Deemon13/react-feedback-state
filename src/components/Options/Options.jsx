import PropTypes from 'prop-types';

export const Options = ({ handleClick, total, handleReset }) => {
	return (
		<>
			<button onClick={evt => handleClick(evt.target.innerText.toLowerCase())}>
				Good
			</button>
			<button onClick={evt => handleClick(evt.target.innerText.toLowerCase())}>
				Neutral
			</button>
			<button onClick={evt => handleClick(evt.target.innerText.toLowerCase())}>
				Bad
			</button>
			{total > 0 && <button onClick={handleReset}>Reset</button>}
		</>
	);
};

Options.propTypes = {
	handleClick: PropTypes.func.isRequired,
	total: PropTypes.number,
	handleReset: PropTypes.func.isRequired,
};
