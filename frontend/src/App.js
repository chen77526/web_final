import 'antd/dist/antd.css';
import Login from './Containers/Login';

const App = () => {
	document.title = 'Jobago'

	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
