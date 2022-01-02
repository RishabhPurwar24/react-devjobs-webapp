import axios from "axios";

// console.log(process.env.REACT_APP_BASE_URL);

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// API Request
export const fetchJobs = () => API.get("/");
