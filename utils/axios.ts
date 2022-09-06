import axios from 'axios';

export const BACKEND_API = process.env.NEXT_PUBLIC_STRAPI_API;

export const websiteBackendApi = axios.create({
  timeout: 1000 * 5,
  baseURL: BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosGetFetcher = (url: string) => websiteBackendApi.get(url).then((res) => res.data);
