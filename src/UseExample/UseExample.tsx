import { Table } from './Table/Table';
import { Skeleton } from './Table/Skeleton';
import { Suspense } from 'react';

export const UseExample = () => {
	return (
		<>
			<h1>Use Example With Suspense</h1>
			<Suspense fallback={<Skeleton />}>
				<Table />
			</Suspense>
		</>
	);
};
