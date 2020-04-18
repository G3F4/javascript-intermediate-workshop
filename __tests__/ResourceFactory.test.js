import ResourceFactory from '../ResourceFactory.js';
import expect from './utils/expect.js';

export default {
  scope: 'ResourceFactory',
  tests: [
    {
      label: 'can be in loading state',
      test() {
        const resource = ResourceFactory();

        resource.startLoading();

        expect(resource.isLoading()).toBe(true);
      },
    },
    {
      label: 'can store data after loading',
      test() {
        const expectedData = { test: true };
        const resource = ResourceFactory();

        resource.startLoading();
        resource.stopLoading(expectedData);

        const data = resource.getData();

        expect(JSON.stringify(expectedData)).toBe(JSON.stringify(data));
      },
    },
    {
      label: 'can store error after loading',
      test() {
        const error = 'This is error';
        const resource = ResourceFactory();

        resource.startLoading();
        resource.handleError(error);

        expect(resource.getError()).toBe(error);
      },
    },
    {
      label: 'keep stored data after handling error',
      test() {
        const error = 'This is error';
        const data = 'This is data';
        const resource = ResourceFactory();

        resource.startLoading();
        resource.stopLoading(data);
        resource.startLoading();
        resource.handleError(error);

        expect(resource.getData()).toBe(data);
      },
    },
  ],
}
