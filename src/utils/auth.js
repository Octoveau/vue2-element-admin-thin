import storage from './storage';

const USERINFO_KEY = 'user_info';
const TOEKN_INFO = 'token_info';

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
  setUserInfo(value) {
    this.#userInfo = value;
    storage.setStorage(USERINFO_KEY, value);
  }
  getUserInfo() {
    return storage.getStorage(USERINFO_KEY);
  }
  removeUserInfo() {
    this.#userInfo = null;
    storage.removeStorage(USERINFO_KEY);
  }

  setTokenInfo(value) {
    storage.setStorage(TOEKN_INFO, value);
  }
  getTokenInfo() {
    return storage.getStorage(TOEKN_INFO);
  }
  removeTokenInfo() {
    storage.removeStorage(TOEKN_INFO);
  }
}

export default new Auth();
