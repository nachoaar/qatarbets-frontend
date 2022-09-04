import axios from "axios";
import authHeader from "./authServiceAtions";


const getPublicContent = () => {
  return axios.get('' + "all");
};
const getModeratorBoard = () => {
  return axios.get('' + "gambler", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get('' + "admin", { headers: authHeader() });
};
const userService = {
  getPublicContent,
  getModeratorBoard,
  getAdminBoard,
};
export default userService
