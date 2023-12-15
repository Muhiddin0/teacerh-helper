import { instance } from "./api";

export const Login = (username: string, password: string) => {
  let data = JSON.stringify({
    username: password,
    password: username,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://teacher.iprogrammer.uz/api/auth/login",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer 17|DlqRN7krD5VyDm64DrN5BPJi2hnqqNVzaise5Efof262b562",
    },
    data: data,
  };

  instance
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
