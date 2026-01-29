import { useEffect } from 'react';

export default function useUpdateLogger<T>(value: T, label: string = 'Logger') {
	useEffect(() => {
		console.log(`${label}:`, value);
	}, [value, label]);
}
