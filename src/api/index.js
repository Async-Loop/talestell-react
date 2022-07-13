import axios from 'axios';

axios.defaults.proxy.host = 'http://localhost:8000';

export const API = axios.create({
	baseURL: 'http://127.0.0.1:8000',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
});
