import axios from "axios";
import address from "./address";

export async function signin(formData) {
  const { data } = await axios.post(address + "/login", formData);
  window.localStorage.setItem("username", data.username);
  window.localStorage.setItem("usertype", data.usertype);
  window.localStorage.setItem("organization", data.organization);
  return data;
}
export async function register(formData) {
  const { data } = await axios.post(address + "/register", formData);
  return data;
}
