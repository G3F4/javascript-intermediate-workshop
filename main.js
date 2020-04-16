import fetchWithNetworkErrorTests from './__tests__/fetchWithNetworkError.test.js';
import stateModelTests from './__tests__/StateModel.test.js';
import resourceModelTests from './__tests__/ResourceModel.test.js';

const testSuites = [
  fetchWithNetworkErrorTests,
  resourceModelTests,
  stateModelTests,
];

const allSuitesTimerLabel = 'All tests finished';

async function runTests(tests) {
  for (const { label, test } of tests) {
    console.group(label);
    try {
      await test();
    } catch (e) {
      console.error('test się wyjebał')
    }
    console.groupEnd();
  }
}

async function runTestSuites(testSuites) {
  console.time(allSuitesTimerLabel);
  for (const { scope, tests } of testSuites) {
    console.groupCollapsed(scope);
    await runTests(tests);
    console.groupEnd();
  }
}

runTestSuites(testSuites).then(() => {
  console.timeEnd(allSuitesTimerLabel);
});