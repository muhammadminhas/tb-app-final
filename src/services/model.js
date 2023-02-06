import axios from "axios";
import address from "./address";

export async function selectModel(formData) {
  const { data } = await axios.post(address + "/addModel", formData);
  return data;
}
