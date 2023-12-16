import { instance } from "./api";
import axios from "axios";

export const Login = async (username: string, password: string): any => {
  let data = JSON.stringify({
    username: username,
    password: password,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/auth/login",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  };

  let response = await instance.request(config);

  return response;
};

export const GetMe = (tokken: string) => {
  const FormData = require("form-data");
  const data = new FormData();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/auth/me",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer 18|OTEYOowFPNQ4D2uro8khJiDmDD2OOWanZf2ygdJSeb532b6d",
      ...data.getHeaders(),
    },
    data: data,
  };

  return instance.request(config);
};
