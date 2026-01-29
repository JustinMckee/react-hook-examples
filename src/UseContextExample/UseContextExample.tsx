import ThemeProvider from '../providers/ThemeProvider';
import { Checkbox } from './Checkbox/Checkbox';

export const UseContextExample = () => {
	return (
		<ThemeProvider>
			<h1>UseContext Example</h1>
			<p>
				useContext allows components to access shared data without prop
				drilling. It subscribes to a Context object and re-renders when the
				context value changes. This is ideal for global state like themes,
				authentication, or user preferences that need to be accessible
				throughout your component tree.
			</p>

			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Theme switching</li>
					<li>User authentication</li>
					<li>Language/localization</li>
					<li>Global settings</li>
					<li>Feature flags</li>
				</ul>
			</div>

			<Checkbox />
		</ThemeProvider>
	);
};
