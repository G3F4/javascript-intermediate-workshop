import Model from '../Model.js';
import expect from './utils/expect.js';

export default {
  scope: 'Model',
  tests: [{
    label: 'can stored new field',
    test() {
      const state = new Model();
      const newFieldKey = 'newFieldKey';
      const newFieldValue = 'newFieldValue';

      state.set(newFieldKey, newFieldValue);

      expect(state.get(newFieldKey)).toBe(newFieldValue);
    }
  }, {
    label: 'can check if field exists',
    test() {
      const state = new Model();
      const newFieldKey = 'newFieldKey';
      const newFieldValue = 'newFieldValue';

      state.set(newFieldKey, newFieldValue);

      expect(state.has(newFieldKey)).toBe(true);
    }
  }, {
    label: 'throws error while getting missing field',
    test() {
      const state = new Model();
      const missingFieldKey = 'missingField';

      try {
        state.get(missingFieldKey);
      } catch (e) {
        expect(e.message).toBe(`No field in model for key: ${missingFieldKey}`);
      }
    }
  }, {
    label: 'allow to chain set operation',
    test() {
      const state = new Model();
      const firstFieldKey = 'abc';
      const firstFieldValue = 'test1';
      const secondFieldKey = 'xyz';
      const secondFieldValue = 'test2';

      state
        .set(firstFieldKey, firstFieldValue)
        .set(secondFieldKey, secondFieldValue);

      expect(state.get(firstFieldKey)).toBe(firstFieldValue);
      expect(state.get(secondFieldKey)).toBe(secondFieldValue);
    }
  }, {
    label: 'allow to chain set and get operation',
    test() {
      const state = new Model();
      const firstFieldKey = 'abc';
      const firstFieldValue = 'test1';
      const secondFieldKey = 'xyz';
      const secondFieldValue = 'test2';

      state.set(firstFieldKey, firstFieldValue);
      const secondFieldFromState = state
        .set(secondFieldKey, secondFieldValue)
        .get(secondFieldKey);

      expect(state.get(firstFieldKey)).toBe(firstFieldValue);
      expect(secondFieldFromState).toBe(secondFieldValue);
    }
  }, {
    label: 'allow to set multiple value',
    test() {
      const state = new Model();
      const firstFieldKey = 'abc';
      const firstFieldValue = 'test1';
      const secondFieldKey = 'xyz';
      const secondFieldValue = 'test2';

      state.update({
        [firstFieldKey]: firstFieldValue,
        [secondFieldKey]: secondFieldValue,
      });

      expect(state.get(firstFieldKey)).toBe(firstFieldValue);
      expect(state.get(secondFieldKey)).toBe(secondFieldValue);
    }
  }],
};
