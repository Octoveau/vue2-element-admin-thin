import service from './index';

// 获取token信息
export const getOpenToken = (data) => service.post('/openapi/auth/token', data);
// 根据token获取用户信息
export const getUserInfoByToken = (token) =>
  service.get('/openapi/auth/user', {
    params: {
      token,
    },
  });
// 刷新token
export const refreshTokenData = (data) => service.put('/openapi/auth/token/refresh', data);
