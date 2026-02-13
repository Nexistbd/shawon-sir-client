import { baseApi } from "@/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // register

  

    //change password

    changePassword: builder.mutation({
      query: (passwordInfo) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: passwordInfo,
      }),
    }),

    //forgot password
    forgotPassword: builder.mutation({
      query: (phone) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: phone,
      }),
    }),

    // reset password
    resetPassword: builder.mutation({
      query: (passwordData) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: passwordData,
      }),
    }),

    // logout

    logOutFromServer: builder.mutation({
      query: (phone) => ({
        url: "/auth/logout",
        method: "POST",
        body: phone,
      }),
    }),

    confirmationLogOutAndLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/confirmation-logout",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
 
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useLogOutFromServerMutation,
  useConfirmationLogOutAndLoginMutation,
} = authApi;
