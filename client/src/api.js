import axios from 'axios';

const http = axios.create({
	baseURL: 'https://grab-bits-website.vercel.app/',
});

export default http;
