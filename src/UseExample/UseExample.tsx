import { Table } from './Table/Table';
import { Skeleton } from './Table/Skeleton';
import { Suspense } from 'react';

export const UseExample = () => {
	return (
		<>
			<h1>Use Example With Suspense</h1>
			<p>
				The use hook is a new React feature that allows you to read resources
				like Promises and Context directly in your components. When used with
				Suspense, it enables elegant loading states and simplifies async data
				fetching. Unlike useEffect, use can be called conditionally and works
				seamlessly with React's concurrent rendering.
			</p>

			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Data fetching</li>
					<li>Async resources</li>
					<li>Context reading</li>
					<li>Server components</li>
					<li>Streaming data</li>
				</ul>
			</div>

			<Suspense fallback={<Skeleton />}>
				<Table />
			</Suspense>
		</>
	);
};
