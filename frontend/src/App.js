import 'antd/dist/antd.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Containers/NavBar';
import Home from './Containers/Home';
import Footer from './Containers/Footer';
import SignUp from './Containers/SignUp';

const App = () => {
	document.title = 'NTU JOBS'

	return (
		<Router>
			<GlobalStyle />
			<NavBar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
