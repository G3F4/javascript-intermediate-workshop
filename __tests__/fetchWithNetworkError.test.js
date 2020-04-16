import { fetchWithNetworkError } from '../fetchWithNetworkError.js';

export default {
  scope: 'fetchWithNetworkError',
  tests: [
    {
      label: 'fetches existing json',
      async test() {
        return fetchWithNetworkError('./data.json').then(data => {
          console.assert(data.test === true, 'returned data is invalid');
        });
      },
    },
    {
      label: 'handle error while fetches missing json',
      async test() {
        try {
          await fetchWithNetworkError('./missing.json');
        } catch (error) {
          console.assert(error.message === 'Network error occurred while fetching', 'fetch error not handled');
        }
      },
    }
  ],
}
