import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findClientPosition = () => {
  const bonds = axios.get(`${hostNameUrl}/trades`);
  return bonds;
};
