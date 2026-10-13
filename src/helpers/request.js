import axios from 'axios';

const request = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL || 'https://www.parafiamokrzyska.pl/api',
	validateStatus: false,
});

export default request;
