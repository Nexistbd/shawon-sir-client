import { baseApi } from "@/api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all course

    getAllCourse: builder.query({
      query: (args) => ({
        url: "/courses",
        method: "GET",
        params: args,
      }),
      providesTags: ["courses"],
    }),

    // get single course

    getSingleCourse: builder.query({
      query: (slug) => ({
        url: `/courses/${slug}`,
        method: "GET",
      }),
    }),

    getSingleCourseById: builder.query({
      query: (id) => ({
        url: `/courses/single-course/${id}`,
        method: "GET",
      }),
    }),

    // enroll course

    enrollCourse: builder.mutation({
      query: (enrollInfo) => ({
        url: "/admission/students",
        method: "POST",
        body: enrollInfo,
      }),
    }),

    // get current user course
    getUserCourse: builder.query({
      query: () => ({
        url: "/admission/my-course",
        method: "GET",
      }),
    }),

    //  pay with bkash

    payWithBkash: builder.mutation({
      query: (data) => ({
        url: "/payment/bkash-checkout",
        method: "POST",
        body: data,
      }),
    }),

    getCourseCategory: builder.query({
      query: () => ({
        url: "/course-category",
        method: "GET",
      }),
    }),

    admitStudent: builder.mutation({
      query: (data) => {
        return {
          url: "/admission/free-admit-student",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["mycourses"],
    }),
    //
  }),
});

export const {
  useAdmitStudentMutation,
  useGetAllCourseQuery,
  useGetCourseCategoryQuery,
  useEnrollCourseMutation,
  useGetUserCourseQuery,
  useGetSingleCourseQuery,
  usePayWithBkashMutation,
  useGetSingleCourseByIdQuery,
} = courseApi;
