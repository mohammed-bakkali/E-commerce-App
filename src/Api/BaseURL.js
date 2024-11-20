import axios from "axios";

// Create a new instance of Axios with the base URL
const baseURL = axios.create({ baseURL: "https://back-end-app-commerce.vercel.app" });

export default baseURL;
