import 'antd/dist/antd.css';
import Login from './Containers/Login';

const App = () => {
	document.title = 'NTU JOBS'

	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
