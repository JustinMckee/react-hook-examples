import { useState, useRef, useEffect } from 'react';

export const UseRefExample = () => {
	const [input, setInput] = useState('');
	const inputRenderRef = useRef(1);
	const [renderCount, setRenderCount] = useState(1);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	useEffect(() => {
		inputRenderRef.current = inputRenderRef.current + 1;
		setRenderCount(inputRenderRef.current);
	}, [input]);

	return (
		<>
			<h1>UseRef Example</h1>
			<input
				type='text'
				value={input}
				onChange={handleChange}
			/>
			<p>Rendered {renderCount}x</p>
		</>
	);
};
