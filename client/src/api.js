import axios from 'axios';

const http = axios.create({
	baseURL: 'https://grabbit.up.railway.app',
	headers: {
		'Content-type': 'application/json',
	},
});

export default http;
