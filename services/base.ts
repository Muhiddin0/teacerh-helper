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
