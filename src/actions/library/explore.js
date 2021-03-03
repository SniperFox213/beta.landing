// Importing modules
import axios from "axios";
import { urls } from "../../config/api"; 

// Exporting default function
export default async (types) => {
  // And now let's make request to external
  // API
  let response = await axios.get(`${urls.internal}/library/explore?type=${types}`);
  return response.data;
};