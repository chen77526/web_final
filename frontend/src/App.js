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
import { message } from 'antd'
import Verify from './Containers/Verify';
import QueryPosts from './Containers/QueryPosts';

const App = () => {
	document.title = 'NTU JOBS'
	const [login, setLogin] = useState(false);

	const displayStatus = (payload) => {
		if (payload.msg) {
			const { type, msg } = payload
			const content = {
				content: msg, duration: 0.5 }
			switch (type) {
				case 'success':
					message.success(content)
				break
				case 'error':
				default:
					message.error(content)
				break
	}}}

	return (
		<Router>
			<GlobalStyle />
			<NavBar login={login} />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signup" element={<SignUp displayStatus={displayStatus}/>} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/login" element={<Login setLogin={setLogin} />} />
				<Route path='/confirm' element={<Confirm />} />
				<Route path="/verify" element={<Verify />} />
				<Route path="/post/:uid" element={<QueryPosts />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
