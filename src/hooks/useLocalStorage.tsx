import { useState, useEffect } from 'react';

function getLocallyStoredValue<T>(key: string, initialValue: T): T {
	const savedValue = window.localStorage.getItem(key);
	if (savedValue) {
		return JSON.parse(savedValue) as T;
	}
	if (initialValue instanceof Function) {
		return initialValue();
	}
	return initialValue;
}

function setLocallyStoredValue<T>(key: string, value: T | ((val: T) => T)) {
	window.localStorage.setItem(key, JSON.stringify(value));
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		return getLocallyStoredValue<T>(key, initialValue);
	});

	useEffect(() => {
		setLocallyStoredValue(key, storedValue);
	}, [key, storedValue]);

	return [storedValue, setStoredValue] as const;
}
