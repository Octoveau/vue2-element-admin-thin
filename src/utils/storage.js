const __SESSION__ = sessionStorage

class Storage {
  setStorage(key, value) {
    if ($is.isObject(value)) {
      __SESSION__.setItem(key, JSON.stringify(value))
    } else {
      __SESSION__.setItem(key, value)
    }
  }

  getStorage(key) {
    return __SESSION__.getItem(key)
  }

  removeStorage(key) {
    return __SESSION__.removeItem(key)
  }
}

export default new Storage()
