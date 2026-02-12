import config from "@/config";

export const logger = {
  log: (...args: any[]) => {
    if (config.node_env !== "production") {
      console.log(...args);
    }
  },
  error: (...args: any[]) => {
    if (config.node_env !== "production") {
      console.error(...args);
    }
  },
  dir: (obj: any) => {
    if (config.node_env !== "production") {
      console.dir(obj, { depth: null });
    }
  },
};
