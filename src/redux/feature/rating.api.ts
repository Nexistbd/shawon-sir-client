import { baseApi } from "@/api/baseApi";



const ratingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all course

    getAvgRating: builder.query({
      query: (id) => ({
        url: `/rating/${id}`,
        method: "GET",
      }),
      providesTags: ["rating"],
    }),

    // get single course

    postRating: builder.mutation({
      query: (data) => ({
        url: "/rating",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["rating"],
    }),

    //
  }),
});

export const { useGetAvgRatingQuery, usePostRatingMutation } = ratingApi;
