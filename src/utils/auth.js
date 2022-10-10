import storage from './storage'

const USERINFO_KEY = 'USER_INFO'

class Auth {
  #userInfo = ((e) => {
    if (!e) {
      return {}
    }
    try {
      return JSON.parse(e)
    } catch (err) {
      storage.setStorage(USERINFO_KEY, {})
      return {}
    }
  })(storage.getStorage(USERINFO_KEY))

  /*
   * @description 存储用户信息
   */
  setUserInfo(value) {
    this.#userInfo = value
    storage.setStorage(USERINFO_KEY, value)
  }

  /*
   * @description 获取用户Token
   */
  getUserToken() {
    return this.#userInfo?.token
  }

  /*
   * @description 获取用户信息
   */
  getUserInfo() {
    return this.#userInfo && this.#userInfo
  }

  /*
   * @description 删除用户信息
   */
  removeUserInfo() {
    this.#userInfo = {}
    this.removeUserInfo(USERINFO_KEY)
  }
}

export default new Auth()