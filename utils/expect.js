import assert from './assert.js';

function formatError(value, expectedValue) {
return `
value: 
  "${value.toString()}" 
differs from expected value:
  "${expectedValue.toString()}"
`
}

export default function expect(value) {
  return {
    toBe(expectedValue) {
      const condition = value === expectedValue;

      assert(value === expectedValue);

      if (!condition) {
        console.error(formatError(value, expectedValue));
      }
    }
  }
}