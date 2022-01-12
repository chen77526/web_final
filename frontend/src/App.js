import 'antd/dist/antd.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Containers/NavBar';
import Home from './Containers/Home';
import Footer from './Containers/Footer';
import SignUp from './Containers/SignUp';
import Resume from './Containers/Resume';
import Login from './Containers/Login';
import Confirm from './Containers/Confirm';
import { useState } from 'react';

const App = () => {
	document.title = 'NTU JOBS'
	const [login, setLogin] = useState(false);

	return (
		<Router>
			<GlobalStyle />
			<NavBar login={login} />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/login" element={<Login setLogin={setLogin} />} />
				<Route path='/confirm' element={<Confirm />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
