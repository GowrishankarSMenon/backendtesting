import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.168.21/",
  timeout: 5000,
  headers: {
    // "X-Custom-Header": "foobar",
    "apikey": "Alchemus_HilruTAPcY",
    "SecretKey": "E6qu25PwrBv5Pmf9nopKDLxc6SK3lAcR",
    "Content-Type": "application/json",
  },
});

export default instance;