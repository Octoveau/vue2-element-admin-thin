class Util {
  constructor() {}

  /*
   * @description 生成随机id
   */
  createRandomId() {
    return `${Math.random() * 10}-${new Date().getTime()}-${Math.random() * 10}`
  }
}

export default new Util()
