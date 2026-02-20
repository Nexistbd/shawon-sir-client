import config from "@/config";
import axios from "axios";

const api = axios.create({
  baseURL: config.api_url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
