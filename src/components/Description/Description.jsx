import PropTypes from 'prop-types';

import styles from './Description.module.css';

export const Description = ({ title, descr }) => {
	return (
		<section className={styles.description}>
			{title && <h2 className={styles.description__title}>{title}</h2>}
			{descr && <p className={styles.description__text}>{descr}</p>}
		</section>
	);
};

Description.propTypes = {
	title: PropTypes.string,
	descr: PropTypes.string,
};
