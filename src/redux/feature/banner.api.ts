import { baseApi } from "@/api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get
    getAllBanners: builder.query({
      query: () => ({
        url: `/banner`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),
  }),
});

export const { useGetAllBannersQuery } = bannerApi;
