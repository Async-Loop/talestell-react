import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './routes/login/login';
import Signup from './routes/signup/signup';
import SearchPage from './routes/searchpage/SearchPage';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/search" element={<SearchPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
