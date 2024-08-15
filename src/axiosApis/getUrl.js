import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../helper/CookieStorage";

let token_key = getCookie("token_Key");

console.log("params: ", token_key);
const instance = axios.create({
  baseURL: "http://192.168.168.21/",
  timeout: 10000,
  withCredentials: false,
  mode: 'no-cors',
  headers: {
    "X-Custom-Header": "foobar",
    'Access-Control-Allow-Origin': '*', 
    "apikey": "Alchemus_HilruTAPcY",
    "SecretKey": "E6qu25PwrBv5Pmf9nopKDLxc6SK3lAcR",
    "Content-Type": "application/json",
    "Authorization":`Bearer ${token_key}`,
  },
});

export default instance;