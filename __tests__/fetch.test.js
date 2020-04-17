import fetchWithServerError from '../fetchWithServerError.js';
import expect from './utils/expect.js';
import { fetchJSON } from '../fetchJSON.js';

export default {
  scope: 'fetchWithNetworkError',
  tests: [
    {
      label: 'fetches existing json',
      async test() {
        return fetchJSON('./data.json').then(data => {
          expect(data.test).toBe(true);
        });
      },
    },
    {
      label: 'handle error while fetches missing json',
      async test() {
        try {
          await fetchWithServerError('./missing.json');
        } catch (error) {
          expect(error.message).toBe('Network error occurred while fetching');
        }
      },
    }
  ],
}
