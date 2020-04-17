import State from '../State.js';
import expect from './utils/expect.js';

export default {
  scope: 'State',
  tests: [{
    label: 'is created with default values',
    test() {
      const state = new State();
      const activeViewId = state.get('activeViewId');

      expect(activeViewId).toBe('');
    },
  }, {
    label: 'has static method for creating initial state',
    test() {
      const initialState = State.createInitialState();

      expect(
        JSON.stringify(initialState)
      ).toBe(
        JSON.stringify({
          activeViewId: '',
        })
      );
    },
  }],
};
