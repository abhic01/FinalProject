import { hostNameUrl } from "../config/api";
import axios from "axios";
import http from './axios-common'

export const findBonds = () => {
  const bonds = axios.get(`${hostNameUrl}/bonds`);
  return bonds;
};

export const findExpiringBonds = () => {
  const bonds = axios.get(`${hostNameUrl}/expiring/bonds`);
  return bonds;
};

export const findExpiredBonds = () => {
  const bonds = axios.get(`${hostNameUrl}/expired/bonds`);
  return bonds;
};

export const findRedeemedBonds = () => {
  const bonds = axios.get(`${hostNameUrl}/redeemed/bonds`);
  return bonds;
};

export const findUserBonds = (user) => {
  const bonds = axios.get(`${hostNameUrl}/bonds/${user}`);
  return bonds;
}

export const findDueTodayBonds = (user) => {
  const bonds = axios.get(`${hostNameUrl}/bonds/${user}`);
  return bonds;
}



// for SecurityForm
export function saveSecurity(Security){
  return http.post("/bonds", Security)
}