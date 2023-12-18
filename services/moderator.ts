import FormData from "form-data";
import { instance } from "./api";

export const CreateResource = async (
  name: string,
  topic_id: number,
  fileContent: any[],
  authToken: string
) => {
  const data = new FormData();
  data.append("topic_id", topic_id);
  data.append("resource_name", name);
  for (let i = 0; i < fileContent.length; i++) {
    data.append("files[]", fileContent[i]);
  }
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/moderator/resource",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: data,
  };

  return await instance.request(config);
};

export const showResource = async (id: string, token: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/moderator/resource/" + id,
    headers: {
      Accept: "application/json",
      locale: "en",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const ResourceList = async (token: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/moderator/resource",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return await instance.request(config);
};

export const DeletResource = async (id: string, token: string) => {
  let data = JSON.stringify({
    class_name_uz: "2-sinf",
    class_name_en: "2-sinf",
    class_name_ru: "2-sinf",
  });

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: "/api/moderator/resource/" + id,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  return await instance.request(config);
};
