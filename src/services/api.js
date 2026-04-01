import axios from "axios";

const API = axios.create({
  baseURL: "https://ecomm-backend3-production-04ca.up.railway.app/api/products"
});

export default API;
