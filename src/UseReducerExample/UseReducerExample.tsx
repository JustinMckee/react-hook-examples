import { useReducer } from 'react';

type ReducerState = {
	count: number;
};

type ReducerAction = {
	type: 'decrement' | 'increment';
};

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
	switch (action.type) {
		case 'decrement':
			return { count: state.count - 1 };
		case 'increment':
			return { count: state.count + 1 };
		default:
			throw new Error('Incorrect action type provided.');
	}
}

const defaultState = { count: 0 };

export const UseReducerExample = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	function decrement() {
		dispatch({ type: 'decrement' /*, payload: {...} */ }); // More complex use cases can include a payload prop
	}

	function increment() {
		dispatch({ type: 'increment' });
	}

	return (
		<>
			<h1>UseReducer Example</h1>
			<p>
				useReducer is an alternative to useState for managing complex state
				logic. It's particularly useful when you have multiple related state
				values or when the next state depends on the previous one. The reducer
				function centralizes your state update logic, making it easier to test
				and reason about.
			</p>

			<div style={{ marginBottom: '15px', fontSize: '14px', color: '#666' }}>
				<strong>Common use cases:</strong>
				<ul style={{ margin: '5px 0' }}>
					<li>Complex state logic</li>
					<li>Form management</li>
					<li>Shopping carts</li>
					<li>Multi-step wizards</li>
					<li>Undo/redo functionality</li>
				</ul>
			</div>

			<button onClick={decrement}>-</button>
			<span>{state.count}</span>
			<button onClick={increment}>+</button>
		</>
	);
};
