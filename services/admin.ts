import { instance } from "@/services/api";

export const BecomeModeratorList = async (token: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/admin/become-moderator",
    headers: {
      Accept: "application/json",
      locale: "en",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const ConfirModerator = async (id: number, token: string) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/admin/become-moderator/confirm/" + id,
    headers: {
      Accept: "application/json",
      locale: "uz",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const GetResource = async (token: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://teacher.iprogrammer.uz/api/admin/resource",
    headers: {
      Accept: "application/json",
      locale: "en",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const ShowResource = async (token: string, id: number) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/api/admin/resource/${id}`,
    headers: {
      Accept: "application/json",
      locale: "en",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const DeleteResource = async (id: number, token: string) => {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "/api/admin/resource/" + id,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer 89|iOU8DJS1mF0v46KqQGuEwHFzUCuE5xJKihYWqRfb6dd27b80",
      // Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const getUsers = async (token: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/admin/users",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};
export const getUserList = async (id: string, token: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/admin/users/" + id,
    headers: {
      Accept: "application/json",
      locale: "en",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};
