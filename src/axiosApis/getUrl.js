import axios from "axios";

let token_key = localStorage.getItem("token_Key");
console.log("params: ", token_key);
const instance = axios.create({
  baseURL: "http://192.168.168.21/ATS/Portal/",
  timeout: 2000,
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