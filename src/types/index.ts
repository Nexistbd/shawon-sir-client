export type TError = {
  status: string;
  data?: {
    message?: string;
  };
};

export type TMentor = {
  _id: string;
  name: string;
  phone: string;
  user: string;

  subjects: {
    _id: string;
    name: string;
  }[];
  photoUrl: string;
  status: string;
  description: string;
  joinigDate: string;
  payment: number;
  education: string;
  facebookLink: string;
  youtubeLink: string;
  telegramLink: string;
  bio: string;
  detailedBio: string;
  experience: string;
  isTeam: boolean;
  precedence: number;
};
