export type TResource = {
  id: number;
  resource_name: string;
  topic: {
    id: 1;
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
      first_name: string;
      last_name: string;
      email: string;
    };
    science: string | null;
    level: number;
  };
  media: string[];
};
