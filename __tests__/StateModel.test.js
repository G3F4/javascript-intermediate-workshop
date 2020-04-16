import State from '../State.js';

export default {
  scope: 'StateModel',
  tests: [{
    label: 'state test',
    test() {
      const state = new State();

      console.assert(state.get('activeViewId') === '', 'get state.activeViewId default value');

      state.set('activeViewId', 'test');

      console.assert(state.get('activeViewId') === 'test', 'set state.activeViewId value');

      const activeViewId = state.get('activeViewId');

      console.log(['activeViewId'], activeViewId);

      try {
        state.get('missingField');
      } catch (e) {
        console.log(['no field']);
      }

      state.set('test', 1).set('test2', true);

      state.print();
    },
  }],
};
