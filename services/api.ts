import axios from "axios";

export const instance = axios.create({
  baseURL: "https://teacher.iprogrammer.uz",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
