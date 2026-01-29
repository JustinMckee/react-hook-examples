'use no forget'; // Disable React Compiler for this file
import { useState, useTransition } from 'react';

// Generate a large list to filter through
function generateItems(count: number) {
	return Array.from({ length: count }, (_, i) => ({
		id: i,
		name: `Item ${i}`,
		description: `Description for item ${i}`.repeat(10),
	}));
}

const ITEMS = generateItems(30000);

function filterItems(query: string) {
	// Simulate expensive filtering operation
	return ITEMS.filter(
		(item) =>
			item.name.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase()),
	).map((item) => {
		// Light extra processing
		return {
			...item,
			processed: item.description.split('').reverse().join('').substring(0, 50),
		};
	});
}

export const UseTransitionExample = () => {
	const [isPending, startTransition] = useTransition(); // isPending only is noticable for computationaly expensive functions that can be interrupted
	const [input, setInput] = useState('');
	const [filteredItems, setFilteredItems] = useState(ITEMS);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const value = e.target.value;
		// This happens immediately - input stays responsive
		setInput(value);
		// Filter operation is marked as low priority
		startTransition(() => {
			const filtered = filterItems(value);
			setFilteredItems(filtered);
		});
	}

	return (
		<>
			<h1>UseTransition Example</h1>
			<p>
				useTransition allows you to mark certain state updates as non-urgent,
				keeping your UI responsive during expensive operations. It provides an
				isPending flag to show loading states while React processes the
				low-priority updates in the background.
			</p>

			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Search/filter updates</li>
					<li>Tab switching</li>
					<li>Route navigation</li>
					<li>List rendering</li>
					<li>Form validation</li>
				</ul>
			</div>

			<input
				type='text'
				placeholder='Search items...'
				value={input}
				onChange={handleChange}
			/>
			<p>Status: {isPending ? 'Filtering...' : 'Ready'}</p>
			<p>Found {filteredItems.length} items</p>
			<div
				style={{ height: '300px', overflow: 'auto', border: '1px solid #ccc' }}>
				{filteredItems.slice(0, 100).map((item) => (
					<div
						key={item.id}
						style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
						<strong>{item.name}</strong>
					</div>
				))}
			</div>
		</>
	);
};
