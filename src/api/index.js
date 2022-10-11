import axios from "axios";
import setupInterceptors from "./interceptors";
//创建axios实例'

const service = axios.create({
  timeout: 30 * 1000,
  withCredentials: true,
});

//注册axios拦截器
setupInterceptors(service);
export default service;
