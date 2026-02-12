// eslint-disable-next-line import/no-anonymous-default-export
export default {
  node_env: process.env.NEXT_PUBLIC_NODE_ENV,
  file_api: process.env.NEXT_PUBLIC_FILE_URL,
  api_url:
    process.env.NEXT_PUBLIC_NODE_ENV == "development"
      ? process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL
      : process.env.NEXT_PUBLIC_BACKEND_URL_PRODUCTION,
  domain:
    process.env.NEXT_PUBLIC_NODE_ENV == "development"
      ? process.env.NEXT_PUBLIC_FRONTEND_URL
      : process.env.NEXT_PUBLIC_FRONTEND_URL_PRODUCTION,
};
