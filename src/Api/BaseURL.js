import axios from "axios";

// Create a new instance of Axios with the base URL
const baseURL = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export default baseURL;

