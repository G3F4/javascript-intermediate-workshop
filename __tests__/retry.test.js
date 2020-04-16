import retry from '../retry.js';
import expect from './utils/expect.js';

function throwError() {
  throw new Error('error');
}

export default {
  scope: 'retry',
  tests: [
    {
      label: 'can retry call for 3 times',
      async test() {
        let times = 3;
        retry(() => {
          times--;

          if (times !== 0) {
            throwError();
          }
        });

        expect(times).toBe(0);
      },
    },
    {
      label: 'return error when retries over 3 times',
      async test() {
        try {
          retry(() => {
            throwError();
          });
        } catch (e) {
          expect(e.message).toBe('To many retries');
        }
      },
    },
  ],
}
