import { baseApi } from "@/api/baseApi";

const verifyCupponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyPromoCode: builder.mutation({
      query: (promoData) => ({
        url: "/cuppon/verify-promo",
        method: "POST",
        body: promoData,
      }),
    }),
  }),
});

export const { useVerifyPromoCodeMutation } = verifyCupponApi;
