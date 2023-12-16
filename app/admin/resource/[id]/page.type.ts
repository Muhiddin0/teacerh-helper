export type ReourceMedieType = {
  url: string;
  mime: string;
  size: number;
};

export type resourceShowType = {
  id: number;
  resource_name: string | null;
  topic: {
    id: number;
    topic_name: string;
    add: {
      class: string;
      quarter: string;
      science: string;
    };
  };
  moderator: {
    id: number;
    user: {
      id: number;
      first_name: string | null;
      last_name: string | null;
      email: string;
    };
    science: null;
    level: number;
  };
  media: ReourceMedieType[];
};
