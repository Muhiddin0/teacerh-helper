export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthState {
  data: {
    first_name: string | null;
    last_name: string | null;
    birth_day: null | string;
    gender: string | null;
    phone: string | null;
    email: string | null;
    address: {
      region: string;
      city: string;
      school: string;
    } | null;
    class: null | string;
    edu_system: null | string;
    science: {
      id: number;
      science_name: string;
      science_group: string;
    };
    role: {
      id: number;
      name: string;
    };
  };
}
