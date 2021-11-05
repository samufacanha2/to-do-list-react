import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3330",
  timeout: 10000,
});

export default api;
