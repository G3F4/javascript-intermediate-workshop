import ResourceModel from '../ResourceModel.js';

export default [
  {
    label: 'validFetchTest',
    test() {
      const resource = new ResourceModel();

      resource.print();

      resource.startLoading();

      fetch('./data.json').then(response => {
        response.json().then(data => {
          resource.stopLoading(data);
        });
      }).catch(error => resource.handleError(error));
    },
  },
  {
    label: 'invalidFetchTest',
    test() {
      const resource = new ResourceModel();

      resource.print();
      resource.startLoading();

      fetchWithNetworkError('./missing.json').catch(error => {
        resource.handleError(error.message);
        resource.print();
      });
    },
  }
]

function fetchWithNetworkError(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network error occurred while fetching');
    }
  });
}