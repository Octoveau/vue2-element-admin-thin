class Validate {
  constructor() {}

  /*
   * @description 判断是否为中文
   */
  validateChinese(value) {
    const regex = /[\u4e00-\u9fa5]/g
    return regex.test(value)
  }

  /*
   * @description 大写字母
   */
  validateBiggerWord(value) {
    const regex = /^[A-Z]+$/
    return regex.test(value)
  }

  /*
   * @description 小写字母
   */
  validateSmallerWord(value) {
    const regex = /^[a-z]+$/
    return regex.test(value)
  }

  /*
   * @description 大小写字母
   */
  validateWord(value) {
    const regex = /^[A-Za-z]+$/
    return regex.test(value)
  }

  /*
   * @description 大小写字母数字
   */
  validetWordNumber(value) {
    const regex = /^[a-z0-9A-Z]+$/
    return regex.test(value)
  }

  /*
   * @description HTML元素
   */
  validateHtml(value) {
    const regex = /<[^>]+>/g
    return regex.test(value)
  }

  /*
   * @description 外部svg
   */
  isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  }
}

export default new Validate()
