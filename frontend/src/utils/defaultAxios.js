import axios from "axios";

// Set up base parameters to connect with the backend
export default axios.create({
    baseURL: "http://localhost:8000",
    responseType: "json"
})