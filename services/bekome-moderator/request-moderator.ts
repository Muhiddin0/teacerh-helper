import { instance } from "../api";

interface IRequestModerator {
  science_id: number;
  jshshir: string;
}

export const RequestModerator = async (
  science_id: string | number | undefined,
  jshshir: string,
  authToken: string
) => {
  let data = JSON.stringify({
    science_id: science_id,
    jshshir: jshshir,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "/api/teacher/become-moderator",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: data,
  };

  return (await instance.request(config)).data;
};

export const Classes = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/classes",
    headers: {
      Accept: "application/json",
    },
  };

  return await instance.request(config);
};

export const Science = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/api/science",
    headers: {
      Accept: "application/json",
    },
  };

  return await instance.request(config);
};

export const Topic = async (class_id: string, science_id: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/api/topic?class_id=${class_id}&science_id=${science_id}`,
    headers: {
      Accept: "application/json",
    },
  };

  let data = await instance.request(config);
  return data;
};
