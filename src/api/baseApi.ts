// import {
//   BaseQueryApi,
//   BaseQueryFn,
//   DefinitionType,
//   FetchArgs,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";

// import { RootState } from "@/redux/store";

// import config from "@/config";

// import { logger } from "@/utils/logger";
// import { logout, setUser } from "@/redux/feature/auth/authSliece";

// // base query

// const baseQuery = fetchBaseQuery({
//   baseUrl: "/api/v1",
//   credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", `${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (
//     (result && result.error && result.error.status === 403) ||
//     result.error?.status === "FETCH_ERROR"
//   ) {
//     logger.log("logout need");
//     api.dispatch(logout());
//   }

//   if (result && result.error && result.error.status === 401) {
//     // Sending refresh token
//     const res = await fetch(`${config.api_url}/auth/refresh-token`, {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();

//     // console.log("refres token", data);

//     if (data && data.data && data.data.accessToken) {
//       const user = (api.getState() as RootState).auth.user;

//       api.dispatch(
//         setUser({
//           user: user,
//           token: data.data.accessToken,
//         }),
//       );
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }

//   return result;
// };

// //
// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithRefreshToken,

//   endpoints: () => ({}),
//   tagTypes: [
//     "rating",
//     "booking",
//     "profile",
//     "courses",
//     "success",
//     "payments",
//     "mycourses",
//     "notice",
//   ],
// });
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logout } from "@/redux/feature/auth/authSliece";
import { getSession } from "next-auth/react"; // সেশন পাওয়ার জন্য

// ১. Base Query: এখন এটি শুধু আপনার প্রক্সি রুটকে কল করবে
const baseQuery = fetchBaseQuery({
  baseUrl: "/api/v1", // আপনার Next.js Proxy Route
});

const baseQueryWithReauth: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    api.dispatch(logout());

    // ব্রাউজারে থাকলে রিডাইরেক্ট করতে পারেন
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("login", "true");
      window.history.pushState({}, "", url.toString());
      window.dispatchEvent(new Event("popstate"));
    }
  }

  // ৩. যদি ৪MD (Forbidden) বা নেটওয়ার্ক এরর হয়
  if (
    result?.error?.status === 403 ||
    result?.error?.status === "FETCH_ERROR"
  ) {
    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: [
    "rating",
    "booking",
    "profile",
    "courses",
    "success",
    "payments",
    "mycourses",
    "notice",
  ],
});
