import instance from "./index";

async function AddNewUser(data) {
  const response = await instance.post(`/mini-project/api/auth/register`, data);
  return response;
}

async function name(params) {}

export { AddNewUser };