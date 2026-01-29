import { useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prev) => !prev);
	}

	return (
		<ThemeContext value={{ darkTheme, toggleTheme }}>{children}</ThemeContext>
	);
}
