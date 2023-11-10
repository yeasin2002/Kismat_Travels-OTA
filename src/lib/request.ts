import { getAuth, setAuth, GetAdminAuth } from "$lib";
import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  transformRequest: [
    ...(Array.isArray(axios.defaults.transformRequest) ? axios.defaults.transformRequest : []),
    (data, headers) => {
      if (typeof document === "undefined") {
        headers.common["Authorization"] = `Bearer ${getAuth()}`;
      }

      return data;
    },
  ],
});

export const request_for_Admin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

// Add a request interceptor to modify the request before it's sent
request_for_Admin.interceptors.request.use(
  function (config) {
    let Headers: {
      key?: string;
      sessions?: string;
    } = {};
    let auth = GetAdminAuth();
    if (auth) {
      Headers["key"] = auth.key;
      Headers["sessions"] = auth.session;
    }
    config.data = {
      ...config.data,
      Headers,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const GET = request.get;
export const POST = request.post;
export const PUT = request.put;
export const PATCH = request.patch;
export const DELETE = request.delete;
