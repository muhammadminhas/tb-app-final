import axios from "axios";
import address from "./address";

export default async function addNewData(formData) {
  const { data } = await axios.post(address + "/get_and_insert_data", formData);
  return data;
}
