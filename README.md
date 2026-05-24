# jest-isa

Basic instanceof, but with slightly more advanced checking

## Usage

```js
const isA = require('jest-isa');
const jest = require('jest');

jest.expect.extend({
  isA,
});

test('is a function range', () => expect(function(){}).isA(Function));
test('is a string'        , () => expect("").isA(String));
```
