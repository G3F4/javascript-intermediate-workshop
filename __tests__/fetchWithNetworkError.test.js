import { fetchWithNetworkError } from '../fetchWithNetworkError.js';
import expect from './utils/expect.js';

export default {
  scope: 'fetchWithNetworkError',
  tests: [
    {
      label: 'fetches existing json',
      async test() {
        return fetchWithNetworkError('./data.json').then(data => {
          expect(data.test).toBe(true);
        });
      },
    },
    {
      label: 'handle error while fetches missing json',
      async test() {
        try {
          await fetchWithNetworkError('./missing.json');
        } catch (error) {
          expect(error.message).toBe('Network error occurred while fetching');
        }
      },
    }
  ],
}
