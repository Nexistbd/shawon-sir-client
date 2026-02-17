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

export interface TCouseMentorSchema {
  mentor: string;
  isDeleted: boolean;
}

export interface TCourseSubjectSchema {
  label: string;
  value: string;
}

export interface TCourseConfigItem {
  status: boolean;
}

export interface TCourseConfig {
  liveClass: TCourseConfigItem;
  examList: TCourseConfigItem;
  classList: TCourseConfigItem;
}

export interface TCourse {
  _id?: string;
  name: string;
  subtitle: string;
  regular_fees: number;
  discount_fees: number;
  details?: string;
  feature: string[];
  category: string;

  videoID?: string;
  status: "active" | "inactive";
  isCompleted: boolean;
  photoUrls: string;
  slug: string;
  routineUrls?: string;
  facebookLink?: string;
  telegramLink?: string;
  mentors: TCouseMentorSchema[];
  totalStudent: number;
  precedence?: number;
  time: string;
  emergency?: string;
  course_code: string;
  subjects: TCourseSubjectSchema[];
  isPreBooking: boolean;
  isFree: boolean;

  isEnableEnrollment: boolean;
  defaultPromo?: string;
  defaultDiscount?: number;
  profileUpdate: boolean;
  isDeleted: boolean;
  isPublic: boolean;
  courseConfig?: TCourseConfig;
}

//  "mentors": [
//             {
//                 "mentor": {
//                     "_id": "698f45e668da28ed51f0b427",
//                     "name": "Shawon Sir",
//                     "subjects": [
//                         {
//                             "name": "English"
//                         }
//                     ],
//                     "photoUrl": "1770997200468-waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg",
//                     "education": "University of Dhaka"
//                 },
//                 "isDeleted": false
//             }
//         ],