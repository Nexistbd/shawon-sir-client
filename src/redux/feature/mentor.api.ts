import { baseApi } from "@/api/baseApi";

const mentorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get
    getAllMentors: builder.query({
      query: () => ({
        url: `/mentors`,
        method: "GET",
      }),
      providesTags: ["mentors"],
    }),
  }),
});

export const { useGetAllMentorsQuery } = mentorApi;
