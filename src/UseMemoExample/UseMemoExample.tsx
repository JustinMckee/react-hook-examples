'use no memo'; // For this example, opt out of automatically memoizing with babel-plugin-react-compiler
import { useState, useMemo } from 'react';
import styles from './UseMemoExample.module.scss';

export default function UseMemoExample() {
	const [count, setCount] = useState(0);
	const [darkMode, setDarkMode] = useState(false);

	// Memoize the slow calculation
	// This only runs when count changes, NOT when darkMode changes
	const doubleNumber = useMemo(() => {
		console.log('Calculating double number...');
		return slowly(count * 2);
	}, [count]);

	return (
		<>
			<h1>UseMemo Example</h1>
			<div>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>Increment Count</button>
				<p>Double: {doubleNumber}</p>
			</div>
			<div
				className={
					darkMode ? `${styles['dark-mode']}` : `${styles['light-mode']}`
				}>
				<p>Dark Mode: {darkMode ? 'On' : 'Off'}</p>
				<button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
			</div>
		</>
	);
}

function slowly(newCount: number) {
	// Simulate a slow function
	const start = performance.now();
	while (performance.now() - start < 2000) {
		// Busy wait for 2 seconds
	}
	return newCount;
}
