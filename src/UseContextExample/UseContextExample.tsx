import ThemeProvider from '../providers/ThemeProvider';
import { Checkbox } from './Checkbox/Checkbox';

export const UseContextExample = () => {
	return (
		<ThemeProvider>
			<h1>UseContext Example</h1>
			<Checkbox />
		</ThemeProvider>
	);
};
