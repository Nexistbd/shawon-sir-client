import { baseApi } from "@/api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkPhone: builder.query({
      query: (phone) => ({
        url: `/users/check/${phone}`,
        method: "GET",
      }),
    }),
    sendOTP: builder.mutation({
      query: (data) => ({
        url: "/users/send-otp",
        method: "POST",
        body: data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (data) => ({
        url: "/users/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/users/sign-up",
        method: "POST",
        body: userInfo,
      }),
    }),

    //get
    getUserInfo: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),

    // updateprofile
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: "/users/update/my-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserProfileMutation,
  useSignUpMutation,
  useLazyCheckPhoneQuery,
  useSendOTPMutation,
  useVerifyOTPMutation,
} = usersApi;
