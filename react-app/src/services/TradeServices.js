import { hostNameUrl } from "../config/api";
import axios from "axios";
import http from './axios-common'

export const findClientPosition = (id) => {
  const bonds = axios.get(`${hostNameUrl}/client_position/${id}`);
  return bonds;
};
