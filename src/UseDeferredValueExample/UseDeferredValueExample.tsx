'use no forget'; // Disable React Compiler for this file
import { useDeferredValue, useState, memo } from 'react';

// Generate a large list to filter through
function generateItems(count: number) {
	return Array.from({ length: count }, (_, i) => ({
		id: i,
		name: `Item ${i}`,
		description: `Description for item ${i}`.repeat(10),
	}));
}

const ITEMS = generateItems(50000);

// Expensive list component that's slow to render
const SlowList = memo(({ query }: { query: string }) => {
	const filteredItems = ITEMS.filter(
		(item) =>
			item.name.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<div style={{ marginTop: '20px' }}>
			<p style={{ fontWeight: 'bold' }}>
				Found {filteredItems.length} items (Query: "{query}")
			</p>
			<div
				style={{ height: '300px', overflow: 'auto', border: '1px solid #ccc' }}>
				{filteredItems.slice(0, 200).map((item) => (
					<div
						key={item.id}
						style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
						<strong>{item.name}</strong>
						<p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
							{item.description.substring(0, 100)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
});

export const UseDeferredValueExample = () => {
	const [input, setInput] = useState('');

	// Defer the input value - React will prioritize updating `input` over `deferredInput`
	const deferredInput = useDeferredValue(input);

	// Visual indicator of when values are out of sync
	const isStale = input !== deferredInput;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<>
			<h1>UseDeferredValue Example</h1>
			<p>
				Type quickly to see the debouncing effect. The input stays responsive
				while the expensive list update is deferred.
			</p>
			
			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Search filtering</li>
					<li>Live previews</li>
					<li>Autocomplete suggestions</li>
					<li>Data visualization</li>
					<li>Table sorting</li>
				</ul>
			</div>

			<input
				type='text'
				placeholder='Search items...'
				value={input}
				onChange={handleChange}
				style={{
					padding: '8px',
					fontSize: '16px',
					width: '300px',
					border: isStale ? '2px solid orange' : '2px solid green',
				}}
			/>

			<div style={{ marginTop: '10px', fontSize: '14px' }}>
				<p>
					<strong>Current Input:</strong> {input || '(empty)'}
				</p>
				<p>
					<strong>Deferred Input:</strong> {deferredInput || '(empty)'}
				</p>
				<p>
					<strong>Status:</strong> {isStale ? '⏳ Processing...' : '✅ In Sync'}
				</p>
			</div>

			<SlowList query={deferredInput} />
		</>
	);
};
