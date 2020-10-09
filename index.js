module.exports = {
  isA: function (actual, expected) {
    const result = {
      message: () => `Expected ${actual} to be a ${expected.name}`,
      pass   : false
    };
    switch (expected) {
      case Object:
        result.pass = (!!actual) && ('object' === typeof actual);
        return result;
      case Function:
      case Number:
      case String:
        if ('object' === typeof actual) {
          result.pass = actual instanceof expected;
          return result;
        } else {
          result.pass = expected.name.toLowerCase() === typeof actual;
          return result;
        }
      default:
        if ('function' === typeof expected['is' + expected.name]) {
          result.pass = expected['is' + expected.name](actual);
          return result;
        } else {
          result.pass = actual instanceof expected;
          return result;
        }
    }
  }
};
