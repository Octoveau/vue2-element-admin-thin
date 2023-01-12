import service from './index';

// 获取用户信息
export const getOpenToken = (data) => service.post('/api/openapi/auth/token', data);
