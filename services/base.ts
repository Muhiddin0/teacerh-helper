import { instance } from "./api";

export const Science = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://teacher.iprogrammer.uz/api/science?",
    headers: {
      Accept: "application/json",
      locale: "en",
    },
  };

  return await instance.request(config);
};

export const Topics = async (
  classID: number | string,
  scienceID: number | string,
  paginationID: string | number = 1
) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://teacher.iprogrammer.uz/api/topic?class_id=${classID}&science_id=${scienceID}&page=${paginationID}`,
    headers: {
      Accept: "application/json",
    },
  };

  return await instance.request(config);
};
export const TopicsFilter = async (
  classID: number | string,
  scienceID: number | string,
  q: string
) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://teacher.iprogrammer.uz/api/topic?class_id=${classID}&science_id=${scienceID}&q=${q}`,
    headers: {
      Accept: "application/json",
    },
  };

  return await instance.request(config);
};
