import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance-backend.herokuapp.com/api';

export async function userSignup(user) {
  const { data } = await axios.post(`/users/signup`, user);
  return data;
}

export async function userLogin(user) {
  const { data } = await axios.post(`/users/login`, user);
  return data;
}

export async function userCurrent() {
  const { data } = await axios.get(`/users/current`);
  return data;
}

export async function userLogout() {
  const { data } = await axios.post(`/users/logout`);
  return data;
}
