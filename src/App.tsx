import './App.css';
import { CustomHook } from './CustomHookExample/CustomHookExample';
import { UseContextExample } from './UseContextExample/UseContextExample';
import { UseDeferredValueExample } from './UseDeferredValueExample/UseDeferredValueExample';
import { UseExample } from './UseExample/UseExample';
import UseMemoExample from './UseMemoExample/UseMemoExample';
import { UseReducerExample } from './UseReducerExample/UseReducerExample';
import { UseTransitionExample } from './UseTransitionExample/UseTransitionExample';

function App() {
	return (
		<>
			<CustomHook />
			<UseMemoExample />
			<UseContextExample />
			<UseExample />
			<UseReducerExample />
			<UseTransitionExample />
			<UseDeferredValueExample />
		</>
	);
}

export default App;
