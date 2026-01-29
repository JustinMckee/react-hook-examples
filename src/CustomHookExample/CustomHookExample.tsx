import useLocalStorage from '../hooks/useLocalStorage'; // Custom
import useUpdateLogger from '../hooks/useUpdateLogger'; // Custom

export const CustomHook = () => {
	const [name, setName] = useLocalStorage('name', '');
	useUpdateLogger(name, 'Name');

	return (
		<>
			<h1>Custom Hook Example: useLocalStorage & useUpdateLogger</h1>

			<p>
				Custom hooks let you extract reusable logic from components into
				functions that can be shared across your application. They follow the
				same rules as built-in hooks and can use other hooks internally. Custom
				hooks promote code reuse, improve testability, and help organize complex
				logic by encapsulating it in a single place.
			</p>

			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Form handling</li>
					<li>API requests</li>
					<li>Local storage</li>
					<li>Event listeners</li>
					<li>Animation logic</li>
				</ul>
			</div>

			<p>
				A custom hook that syncs state with localStorage. Open devtools and
				watch the "Application" tab to see the localStorage update as you type.
				Open devtools console to see the logger output.
			</p>
			<input
				type='text'
				placeholder='useLocalStorage'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</>
	);
};
