import service from './index';
// 获取用户信息
export const getUserInfoData = () => service.get('api/info');

// get octoveau all public git projects
export const getAllGitProjects = (user = 'octoveau') => service.get(`//api.github.com/users/${user}/repos`);
