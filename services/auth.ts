import { instance } from "./api";

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

  return await instance.request(config);
};

export const GetMe = async (token: string | null) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://teacher.iprogrammer.uz/api/auth/me",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return await instance.request(config);
};

export const Register = async (username: string, science_id: string) => {
  let data = JSON.stringify({
    username: username,
    science_id: science_id,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/auth/register",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await instance.request(config);
};

export const confirmCode = async (username: string, code: number) => {
  let data = JSON.stringify({
    username: username,
    code: code,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/auth/confirm",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await instance.request(config);
};

export const RessetConfirm = async (username: string) => {
  let data = JSON.stringify({
    username: username,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/auth/reset",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await instance.request(config);
};
