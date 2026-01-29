import useLocalStorage from '../hooks/useLocalStorage'; // Custom
import useUpdateLogger from '../hooks/useUpdateLogger'; // Custom

export const CustomHook = () => {
	const [name, setName] = useLocalStorage('name', '');
	useUpdateLogger(name, 'Name');

	return (
		<>
			<h1>Custom Hook Example: useLocalStorage & useUpdateLogger</h1>
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
