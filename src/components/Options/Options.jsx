import PropTypes from 'prop-types';

import styles from './Options.module.css';

export const Options = ({ handleClick, total, handleReset }) => {
	return (
		<section className={styles.options}>
			<ul className={styles.options__list}>
				<li className={styles.options__item}>
					{' '}
					<button
						type="button"
						className={styles.options__button}
						onClick={evt => handleClick(evt.target.innerText.toLowerCase())}
					>
						Good
					</button>
				</li>
				<li className={styles.options__item}>
					{' '}
					<button
						type="button"
						className={styles.options__button}
						onClick={evt => handleClick(evt.target.innerText.toLowerCase())}
					>
						Neutral
					</button>
				</li>
				<li className={styles.options__item}>
					{' '}
					<button
						type="button"
						className={styles.options__button}
						onClick={evt => handleClick(evt.target.innerText.toLowerCase())}
					>
						Bad
					</button>
				</li>
				<li className={styles.options__item}>
					{total > 0 && (
						<button
							type="button"
							className={styles.options__button}
							onClick={handleReset}
						>
							Reset
						</button>
					)}
				</li>
			</ul>
		</section>
	);
};

Options.propTypes = {
	handleClick: PropTypes.func.isRequired,
	total: PropTypes.number,
	handleReset: PropTypes.func.isRequired,
};
