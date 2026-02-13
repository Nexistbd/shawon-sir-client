import { baseApi } from "@/api/baseApi";


const studentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get active batch
    checkStudentCourseForEnroll: builder.query({
      query: (id) => {
        // console.log(id, "inside");
        return {
          url: `/enrollment/check-enroll/${id}`,
          method: "GET",
        };
      },
    }),

    // dashboard verification

    studentDashboardVerification: builder.mutation({
      query: (data) => {
        // console.log(data, "inside");
        return {
          url: "/approved/verify",
          method: "PATCH",
          body: data,
        };
      },
    }),

    studentRollValidation: builder.mutation({
      query: (data) => {
        return {
          url: "/admission/students-validation",
          method: "POST",
          body: data,
        };
      },
    }),

    getStudentPaymentList: builder.query({
      query: (args) => ({
        url: "/transaction/my-invoices",
        method: "GET",
        params: args,
      }),
      providesTags: ["payments"],
    }),

    // close
  }),
});

export const {
  useCheckStudentCourseForEnrollQuery,
  useStudentDashboardVerificationMutation,
  useStudentRollValidationMutation,
  useGetStudentPaymentListQuery,
} = studentApi;
