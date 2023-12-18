import { instance } from "./api";

const UpdateFromModerator = async (
  science_id: number,
  jshshir: string,
  token: string
) => {
  let data = JSON.stringify({
    science_id: science_id,
    jshshir: jshshir,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "api/teacher/become-moderator",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  instance.request(config);
};
