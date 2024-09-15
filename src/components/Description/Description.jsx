import PropTypes from 'prop-types';

export const Description = ({ title, descr }) => {
	return (
		<>
			{title && <h2>{title}</h2>}
			{descr && <p>{descr}</p>}
		</>
	);
};

Description.propTypes = {
	title: PropTypes.string,
	descr: PropTypes.string,
};
