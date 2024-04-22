import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://hotel-reservations-1.onrender.com/api/v1",
  withCredentials: true,
});

export default apiRequest;