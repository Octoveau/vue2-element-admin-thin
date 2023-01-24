import storage from './storage';

const USERINFO_KEY = 'user_info';

class Auth {
  #userInfo = ((e) => {
    console.log('e', e);
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

  /*
   * @description 获取用户信息
   */
  getUserInfo() {
    return storage.getStorage(USERINFO_KEY);
  }

  /*
   * @description 删除用户信息
   */
  removeUserInfo() {
    this.#userInfo = null;
    storage.removeStorage(USERINFO_KEY);
  }
}

export default new Auth();
