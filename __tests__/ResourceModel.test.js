import Resource from '../Resource.js';

export default {
  scope: 'Resource',
  tests: [
    {
      label: 'can be in loading state',
      test() {
        const resource = new Resource();

        resource.startLoading();

        console.assert(resource.isLoading() === true);
      },
    },
    {
      label: 'can store data after loading',
      test() {
        const expectedData = { test: true };
        const resource = new Resource();

        resource.startLoading();
        resource.stopLoading(expectedData);

        const data = resource.getData();

        console.assert(JSON.stringify(expectedData) === JSON.stringify(data));
      },
    },
    {
      label: 'can store error after loading',
      test() {
        const error = 'This is error';
        const resource = new Resource();

        resource.startLoading();
        resource.handleError(error);

        console.assert(resource.getError() === error);
      },
    },
    {
      label: 'keep stored data after handling error',
      test() {
        const error = 'This is error';
        const data = 'This is data';
        const resource = new Resource();

        resource.startLoading();
        resource.stopLoading(data);
        resource.startLoading();
        resource.handleError(error);

        console.assert(resource.getData() === data);
      },
    },
  ],
}
