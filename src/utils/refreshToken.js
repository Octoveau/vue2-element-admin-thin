import authStorage from '@/utils/auth';
import { refreshTokenData } from '@/api/auth';
import { Message } from 'element-ui';

const refreshTokenFun = async () => {
  const tokenInfo = JSON.parse(authStorage.getTokenInfo() || 'null');
  // token不存在，直接重新登录
  if (!tokenInfo) {
    return false;
  }
  // token存在，需要判断是否刷新
  // 1.判断是否超过刷新token的过期时间
  if (new Date().getTime() > tokenInfo.refreshTokenExpires || new Date().getTime() > tokenInfo.expires) {
    Message.warning('登录过期，请重新登录');
    return false;
  }
  // 2.判断是否需要续约token，30分支到60分钟续约
  if (new Date().getTime() + 1000 * 60 * 30 >= tokenInfo.expires) {
    const { token, refreshToken } = tokenInfo;
    try {
      const result = await refreshTokenData({ token, refreshToken });
      authStorage.setTokenInfo(result.data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return true;
};
export default refreshTokenFun;
