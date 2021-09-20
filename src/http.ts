import axios, { AxiosTransformer } from "axios";
import { addAuthToken } from "./auth"; // failed to respect module here because of a circular import issue

const BASE_URL = 'http://authors-social-platform.herokuapp.com/api/v1';

axios.defaults.headers.common["Content-Type"] = "application/json";

const defaultRequestTransformers = (): AxiosTransformer[] => {
  const { transformRequest } = axios.defaults;
  if (!transformRequest) {
    return [];
  } else if (transformRequest instanceof Array) {
    return transformRequest;
  } else {
    return [transformRequest];
  }
};

const defaultResponseTransformers = (): AxiosTransformer[] => {
  const { transformResponse } = axios.defaults;
  if (!transformResponse) {
    return [];
  } else if (transformResponse instanceof Array) {
    return transformResponse;
  } else {
    return [transformResponse];
  }
};

export const authenticatedInstance = axios.create({
  baseURL: BASE_URL,
  transformRequest: [...defaultRequestTransformers(), addAuthToken],
  transformResponse: [...defaultResponseTransformers()]
});

export const unAuthenticatedInstance = axios.create({
  baseURL: BASE_URL
});


