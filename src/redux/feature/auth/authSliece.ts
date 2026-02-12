import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TInfUser = {
  id: string;
  role: string;
  phone: string;
  name: string;
  access: boolean;
  photoUrl: string;
  iat: number;
  exp: number;
};
type TAuthState = {
  user: null | TInfUser;
  token: null | string;
  phone: null | string;
  defaultCourse: null | TDefaultCourse;
};

export type TDefaultCourse = {
  courseId: string;
  course_variation: string;
  branchId: string;
  batchId: string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  phone: null,
  defaultCourse: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    // set phone
    setPhoneNumber: (state, action) => {
      state.phone = action.payload;
    },

    removePhone: (state) => {
      state.phone = null;
    },
    setCourse: (state, action) => {
      state.defaultCourse = action.payload;
    },
    removeCourseId: (state) => {
      state.defaultCourse = null;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.phone = null;
    },
  },
});

export const {
  setUser,
  logout,
  setPhoneNumber,
  removePhone,
  setCourse,
  removeCourseId,
} = authSlice.actions;

export default authSlice.reducer;

export const CurrentToken = (state: RootState) => state.auth.token;
export const CurrentUser = (state: RootState) => state.auth.user;
export const CurrentPhone = (state: RootState) => state.auth.phone;
export const DefaultCourseId = (state: RootState) => state.auth.defaultCourse;
