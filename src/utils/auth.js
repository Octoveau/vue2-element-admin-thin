import storage from './storage';

const USERINFO_KEY = 'user_info';
const TOKEN_INFO = 'token_info';
const IS_SSO_LOGIN = 'isSsoLogin';

class Auth {
  #userInfo = ((e) => {
    if (!e) {
      return null;
    }
    try {
      return JSON.parse(e);
    } catch (err) {
      storage.setStorage(USERINFO_KEY, null);
      return null;
    }
  })(storage.getStorage(USERINFO_KEY));

  /*
   * @description 存储用户信息
   */
  setUserInfo(value) {
    this.#userInfo = value;
    storage.setStorage(USERINFO_KEY, value);
  }

  /*
   * @description 获取用户Token
   */
  getUserToken() {
    return this.#userInfo?.token;
  }

  getUserInfo() {
    return storage.getStorage(USERINFO_KEY);
  }

  removeUserInfo() {
    this.#userInfo = null;
    storage.removeStorage(USERINFO_KEY);
  }

  setTokenInfo(value) {
    storage.setStorage(TOKEN_INFO, value);
  }

  getTokenInfo() {
    return storage.getStorage(TOKEN_INFO);
  }

  removeTokenInfo() {
    storage.removeStorage(TOKEN_INFO);
  }

  // 写入是否是ssologin的标识
  setIsSsoLoginInfo(value) {
    storage.setStorage(IS_SSO_LOGIN, value);
  }

  // 写入是否是ssologin的标识
  getIsSsoLoginInfo() {
    return storage.getStorage(IS_SSO_LOGIN);
  }
}

export default new Auth();
