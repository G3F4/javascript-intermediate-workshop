import fetchTests from './__tests__/fetch.test.js';
import retryTests from './__tests__/retry.test.js';
import modelTests from './__tests__/Model.test.js';
import stateTests from './__tests__/State.test.js';
import resourceTests from './__tests__/Resource.test.js';

const testSuites = [
  modelTests,
  stateTests,
  fetchTests,
  resourceTests,
  retryTests,
];

const allSuitesTimerLabel = 'All tests finished';

async function runTests(tests) {
  for (const { label, test } of tests) {
    console.group(label);
    try {
      await test();
    } catch (e) {
      console.error(e.toString());
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