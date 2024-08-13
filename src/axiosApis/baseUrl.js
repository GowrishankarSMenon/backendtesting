import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://192.168.168.21/",
//   timeout: 1000,
//   headers: {
//     "X-Custom-Header": "foobar",
//     "apikey": "Alchemus_HilruTAPcY",
//     "SecretKey": "E6qu25PwrBv5Pmf9nopKDLxc6SK3lAcR",
//     "Content-Type": "application/json",
//   },
// });
const instance = axios.create({
  baseURL: "http://192.168.168.21/",
  timeout: 20000,
  withCredentials: false,
  mode: 'no-cors',
  headers: {
    "X-Custom-Header": "foobar",
    'Access-Control-Allow-Origin': '*', 
    "apikey": "Alchemus_HilruTAPcY",
    "SecretKey": "E6qu25PwrBv5Pmf9nopKDLxc6SK3lAcR",
    "Content-Type": "application/json",
  },
});

export default instance;
