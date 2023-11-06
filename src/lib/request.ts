import { getAuth, setAuth } from "$lib";
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

export const GET = request.get;
export const POST = request.post;
export const PUT = request.put;
export const PATCH = request.patch;
export const DELETE = request.delete;
