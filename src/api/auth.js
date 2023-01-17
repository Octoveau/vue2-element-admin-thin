import service from './index';

// 获取token信息
export const getOpenToken = (data) => service.post('/api/openapi/auth/token', data);
//根据token获取用户信息
export const getUserInfoByToken = (token) =>
  service.get('/api/openapi/auth/user', {
    params: {
      token,
    },
  });
