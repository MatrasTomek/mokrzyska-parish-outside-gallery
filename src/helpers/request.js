import axios from 'axios';

const request = axios.create({
	// Względny URL: front i API są na tej samej domenie, więc żądanie jest
	// same-origin niezależnie od http/https (brak CORS). Lokalnie ustaw
	// REACT_APP_BASE_URL=https://www.parafiamokrzyska.pl/api.
	baseURL: process.env.REACT_APP_BASE_URL || '/api',
	validateStatus: false,
});

export default request;
