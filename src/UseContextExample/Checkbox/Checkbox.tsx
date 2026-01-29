import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Checkbox.module.scss';

export const Checkbox = () => {
	const theme = useContext(ThemeContext);
	return (
		<div
			className={`${styles.theme} ${theme?.darkTheme ? styles['dark-theme'] : styles['light-theme']}`}>
			<label>
				<input
					type='checkbox'
					checked={theme?.darkTheme}
					onChange={() => {
						theme?.toggleTheme();
					}}></input>
				Toggle Dark Theme
			</label>
		</div>
	);
};
