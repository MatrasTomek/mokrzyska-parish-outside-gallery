import axios from 'axios';

const request = axios.create({
	baseURL: 'https://www.tslapp.ovh/parish',
	validateStatus: false,
});

export default request;
