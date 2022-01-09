import 'antd/dist/antd.css';
import Homepage from './Containers/HomePage';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Containers/NavBar';
import Home from './Containers/Home';

const App = () => {
	document.title = 'NTU JOBS'

	return (
		<Router>
			{/* <Homepage /> */}
			<GlobalStyle />
			<NavBar />
			<Routes>
				<Route path="/" exact element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
