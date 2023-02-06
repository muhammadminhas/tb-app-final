import axios from "axios";
import address from "./address";

export default async function updateStatus(id, formData) {
  const { data } = await axios.put(address + `/updateStatus/${id}`, formData);
  return data;
}
