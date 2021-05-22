export class Guard {
  static isEmpty(value: unknown): boolean {
    if (typeof value === 'number' || typeof value === 'boolean') {
      return false;
    }
    if (typeof value === 'undefined' || value === null) {
      return false;
    }
    if (value instanceof Date) {
      return false;
    }
    if (value instanceof Object && !Object.keys(value).length) {
      return true;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return true;
      if (value.every(item => Guard.isEmpty(item))) return true;
    }
    return value === '';
  }

  static lengthIsBetween(
    value: number | string | Array<unknown>,
    min: number,
    max: number
  ): boolean {
    if (Guard.isEmpty(value)) {
      throw new Error(
        `Can not check length of a value. Provided value is empty.`
      )
    }
    const valueLength = typeof value === 'number'
      ? Number(value).toString().length
      : value.length;
    return valueLength >= min && valueLength <= max;
  }
}