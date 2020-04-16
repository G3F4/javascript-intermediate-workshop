import State from '../State.js';
import assert from '../utils/assert.js';
import expect from '../utils/expect.js';

export default {
  scope: 'StateModel',
  tests: [{
    label: 'state test',
    test() {
      const state = new State();

      assert(state.get('activeViewId') === '', 'get state.activeViewId default value');

      state.set('activeViewId', 'test');

      assert(state.get('activeViewId') === 'test', 'set state.activeViewId value');

      try {
        state.get('missingField');
      } catch (e) {
        expect(e.message).toBe('asd');
      }

      state.set('test', 1).set('test2', true);
    },
  }],
};
