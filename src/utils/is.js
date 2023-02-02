class Is {
  #is(value, type) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  }

  isNumber(value) {
    return typeof value === 'number';
  }

  isString(value) {
    return typeof value === 'string';
  }

  isBoolean(value) {
    return typeof value === 'boolean';
  }

  isObject(value) {
    return value !== null && this.#is(value, 'Object');
  }

  isArray(value) {
    return value && Array.isArray(value);
  }

  isNull(value) {
    return value === null;
  }

  isNil(value) {
    return value === undefined || value === null;
  }
}

export default new Is();
