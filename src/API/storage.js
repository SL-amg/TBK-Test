import { jwtDecode } from "jwt-decode";

const getToken = () => localStorage.getItem("token");

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const deleteToken = () => {
  localStorage.removeItem("token");
};

const checkToken = () => {
  const token = getToken();
  if (token) {
    const decode = jwtDecode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      deleteToken();
      return false;
    }
    return true;
  }
  return false;
};
export { checkToken, deleteToken, setToken };