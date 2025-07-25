import axios from "axios";

const api = axios.create({
  baseURL: "https://sgi-api-dev.up.railway.app",
});

export default api;