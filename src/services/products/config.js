import axios from "axios";
const axiosInstance = axios.create({ baseURL: "http://localhost:3001" });
axiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
