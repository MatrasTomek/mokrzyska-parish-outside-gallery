import axios from "axios";

const request = axios.create({
  // baseURL: "https://backend-for-parafia-mokrzyska.herokuapp.com/",
  // baseURL: "https://backend-parish-clone.herokuapp.com/",
  // baseURL: "http://localhost:8000",
  baseURL: "https://www.parafiaapp.ovh",
  validateStatus: false,
});

export default request;
