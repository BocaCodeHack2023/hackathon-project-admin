import axios from "axios";

console.log(process.env);

export const HTTP = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: { "content-type": "application/json" },
});

export default HTTP;
