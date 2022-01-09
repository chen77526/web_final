import 'antd/dist/antd.css';
import Homepage from './Containers/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
	document.title = 'NTU JOBS'

	return (
		<Router>
			<Homepage />
		</Router>
	);
}
export default App;
