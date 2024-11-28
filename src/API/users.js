import instance from "./index";
import axios from "axios";

const register = async (userInfo) => {
  const response = await instance.post("/mini-project/api/auth/register", userInfo);
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
};

async function Login(userInfo) {
  const response = await instance.post("/mini-project/api/auth/login", userInfo);
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
}

async function getProfile() {
  const response = await instance.get("/mini-project/api/auth/me");
  return response;
}

async function getTransaction() {
  const response = await instance.get("/mini-project/api/transactions/my");
  return response;
}

async function getAllUsers() {
  const data = await instance.get("/mini-project/api/auth/users");
  console.log(data, "users")
  return data;
}
//
// async function getAllUsers() {
//   const response = await instance.get("/mini-project/api/auth/users");
//   return response;

async function updateProfile() {
  const response = await instance.put("/mini-project/api/auth/profile");
  return response;
}

async function putDeposit(formData) {
  console.log("putDeposit", formData);
  const response = await instance.put("/mini-project/api/transactions/deposit", formData);
  return response;
}

async function putWithdraw(formData) {
  console.log("putWithdraw", formData);
  const response = await instance.put("/mini-project/api/transactions/withdraw", formData);
  return response;
}

export {
  register,
  Login,
  getProfile,
  putDeposit,
  getTransaction,
  getAllUsers,
  updateProfile,
  putWithdraw,
};