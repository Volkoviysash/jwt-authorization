import axios from "axios";

export const API_URL = `http://localhost:4000/api`;

const $api = axios.create({
  // use cookies with every response
  withCredentials: true,
  baseURL: API_URL,
});
