import './App.css';
import { CustomHook } from './CustomHookExample/CustomHookExample';
import { UseContextExample } from './UseContextExample/UseContextExample';
import { UseExample } from './UseExample/UseExample';
import UseMemoExample from './UseMemoExample/UseMemoExample';

function App() {
	return (
		<>
			<CustomHook />
			<UseMemoExample />
			<UseContextExample />
			<UseExample />
		</>
	);
}

export default App;
