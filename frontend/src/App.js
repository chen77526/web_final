import 'antd/dist/antd.css'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Containers/NavBar';
import Home from './Containers/Home';
import Footer from './Containers/Footer';
import SignUp from './Containers/SignUp';
import Resume from './Containers/Resume';
import Login from './Containers/Login';
import Confirm from './Containers/Confirm';
import { message } from 'antd';
import Post from './Containers/Post';
import Verify from './Containers/Verify';
import Personalpage from './Containers/PersonalPage';
import QueryPosts from './Containers/QueryPosts';
import CreatePost from './Containers/CreatePost';
import { useToken } from './Hooks/useToken';
import Viewapp from './Containers/Viewapp'



const App = () => {
	document.title = 'NTU JOBS'
	const {token, setToken} = useToken()

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
			<NavBar token={token} setToken={setToken}/>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signup" element={<SignUp setToken={setToken} displayStatus={displayStatus}/>} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/login" element={<Login token={token} setToken={setToken}  displayStatus={displayStatus}/>} />
				<Route path='/confirm' element={<Confirm />} />
				<Route path='/post' element={token?<Post token={token}/>:<Login setToken={setToken} displayStatus={displayStatus}/>}/>
				<Route path='/allpost' element={token? <QueryPosts token={token}/>:<Login setToken={setToken} displayStatus={displayStatus}/>}/>
				<Route path="/verify" element={token?<Verify />:<Login setToken={setToken} displayStatus={displayStatus}/>} />
				<Route path="/createPost" element={token?<CreatePost token={token} />:<Login setToken={setToken} displayStatus={displayStatus}/>} />
				<Route path="/personalpage" element={token?<Personalpage token={token} />:<Login setToken={setToken} displayStatus={displayStatus}/>} />
				<Route path="/viewapp" element={token?<Viewapp token={token} />:<Login setToken={setToken} displayStatus={displayStatus}/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
