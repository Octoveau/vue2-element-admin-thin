class Util {
  /*
   * @description 生成随机id
   */
  static createRandomId() {
    return `${Math.random() * 10}-${new Date().getTime()}-${Math.random() * 10}`;
  }
}

export default new Util();
