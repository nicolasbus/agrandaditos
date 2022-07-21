import axios from "axios";

const BASE_URL = "http://localhost:3000/products/";

const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  export const userRequest = axios.create({
    baseURL: "http://localhost:3000/",
  });
  export default publicRequest;