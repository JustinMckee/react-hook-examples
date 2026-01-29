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
			<p>
				useMemo caches the result of an expensive calculation so it only
				recomputes when its dependencies change. This prevents unnecessary
				recalculations on every render, improving performance when dealing with
				computationally expensive operations. Without useMemo, the calculation
				would run every time the component re-renders, even if the inputs
				haven't changed.
			</p>

			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Expensive calculations</li>
					<li>Filtered/sorted lists</li>
					<li>Complex derivations</li>
					<li>API response processing</li>
					<li>Reference equality</li>
				</ul>
			</div>

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
