import axios from "axios";

// Create a new instance of Axios with the base URL
const baseURL = axios.create({ baseURL: "http://127.0.0.1:8000" });

export default baseURL;
