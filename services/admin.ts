import { instance } from "@/services/api";

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
  let data = JSON.stringify({
    name_uz: "2-sinf",
    name_en: "2-sinf",
    name_ru: "2-sinf",
  });

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "https://teacher.iprogrammer.uz/api/admin/resource/" + id,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  return await instance.request(config);
};
