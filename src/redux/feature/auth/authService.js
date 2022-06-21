// import { API } from '../../../api/index';
import axios from 'axios';

const LOGIN_URL = 'http://127.0.0.1:8000/users/login/';
const REGISTER_URL = 'http://127.0.0.1:8000/users/register/';

// Register User
const register = async (userData) => {
	// const response = await API.post('/users/register/', userData);
	// if (response.data) {
	// 	localStorage.setItem('user', JSON.stringify(response.data));
	// }
	// return response.data;
	const response = await axios.post(REGISTER_URL, userData);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

// Login User
const login = async (userData) => {
	// const response = await API.post('users/login/', userData);
	// if (response.data) {
	// 	localStorage.setItem('user', JSON.stringify(response.data));
	// }
	// return response.data;
	const response = await axios.post(LOGIN_URL, userData);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

// Logout User

const logout = () => {
	localStorage.removeItem('user');
};

const authService = {
	register,
	login,
	logout
};

export default authService;
