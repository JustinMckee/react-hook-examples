import { createContext } from 'react';

type ThemeContextType = {
	darkTheme: boolean;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);
