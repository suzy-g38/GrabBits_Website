import axios from 'axios';

const http = axios.create({
	baseURL: 'https://grabbit.up.railway.app',
});

export default http;
