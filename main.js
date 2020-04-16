import resourceModelTests from './__tests__/ResourceModel.test.js';
import stateModelTests from './__tests__/StateModel.test.js';

const tests = [
  ...resourceModelTests,
  ...stateModelTests,
];

function runTests() {
  for (const { label, test } of tests) {
    console.groupCollapsed(label);
    console.time('duration');
    test();
    console.timeEnd('duration');
    console.groupEnd();
  }
}

runTests().then(() => {});