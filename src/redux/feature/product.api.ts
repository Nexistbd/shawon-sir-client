import { baseApi } from "@/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get active batch
    getAllProduct: builder.query({
      query: (args) => ({
        url: "/products",
        method: "GET",
        params: args,
      }),
    }),

    // dashboard verification

    getProductOnlyForCategory: builder.query({
      query: (args) => ({
        url: "/products/category",
        method: "GET",
        params: args,
      }),
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/product/${id}`,
        method: "GET",
      }),
    }),

    //  order

    createProductOrder: builder.mutation({
      query: (data) => ({
        url: "/product-order",
        method: "POST",
        body: data,
      }),
    }),
    createProductOrderForAll: builder.mutation({
      query: (data) => ({
        url: "/product-order/order",
        method: "POST",
        body: data,
      }),
    }),

    //  get my order histrory
    getMyProductOrderHistory: builder.query({
      query: () => ({
        url: "/product-purchase/my-purchase",
        method: "GET",
      }),
    }),
    //
    getProductDiscount: builder.mutation({
      query: (data) => ({
        url: "/product-purchase/apply",
        method: "POST",
        body: data,
      }),
    }),

    // close
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductOnlyForCategoryQuery,
  useCreateProductOrderMutation,
  useGetSingleProductQuery,
  useGetMyProductOrderHistoryQuery,
  useCreateProductOrderForAllMutation,
  useGetProductDiscountMutation,
} = productApi;
