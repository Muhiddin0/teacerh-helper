export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthState {
  first_name: string;
  last_name: string;
  birth_day: null | string;
  gender: string;
  phone?: string;
  email?: string;
  address: {
    region: string;
    city: string;
    school: string;
  };
  class: null | string;
  edu_system: null | string;
  science: null | string;
  role: {
    id: number;
    name: string;
  };
}
