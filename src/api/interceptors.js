import { Message } from 'element-ui';
import router from '@/router';
// eslint-disable-next-line import/no-cycle
import refreshTokenFun from '@/utils/refreshToken';

const ERROE_MSG = '请求异常,请重试';
const ERROR_MSG_400 = '请求参数异常';
const ERROR_MSG_401 = '没有权限访问或者登录过期';
const ERROR_MSG_404 = '没有实际的值';
const ERROR_MSG_500 = '服务器异常';
const whiteApi = ['/openapi/auth/token', '/openapi/auth/token/refresh'];
const handleRespCode = (respData) => {
  switch (respData?.code) {
    case 400:
      Message.error(respData.msg || respData.message || ERROR_MSG_400);
      break;
    case 401:
      Message.error(respData.msg || respData.message || ERROR_MSG_401);
      break;
    case 404:
      Message.error(respData.msg || respData.message || ERROR_MSG_404);
      break;
    case 500:
      Message.error(respData.msg || respData.message || ERROR_MSG_500);
      break;
    default:
      break;
  }
};
const loginFun = () => {
  setTimeout(() => {
    router.push({
      name: 'Login',
    });
  }, 600);
};
const setupInterceptors = (request) => {
  // 请求拦截器
  request.interceptors.request.use(
    async (config) => {
      // 白名单，不需要带token，不需要验证
      if (whiteApi.some((url) => config.url.includes(url))) {
        return config;
      }
      const result = await refreshTokenFun();
      if (!result) {
        loginFun();
        return config;
      }
      return config;
    },
    (error) => Promise.error(error || ERROE_MSG),
  );

  // 响应拦截器
  request.interceptors.response.use(
    (resp) => {
      // 从xios里取出api返回的data
      const respData = resp.data;
      handleRespCode(respData);
      if (respData.code === 401) {
        loginFun();
      }
      return Promise.resolve(respData);
    },
    // httpcode不在200-300时候会到异常拦截器，请求异常
    (error) => {
      const msg = error?.msg || error?.message || ERROE_MSG;
      Message.error(msg);
      return Promise.reject(error);
    },
  );
};
export default setupInterceptors;
