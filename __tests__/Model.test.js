import Model from '../Model.js';
import expect from './utils/expect.js';

export default {
  scope: 'Model',
  tests: [{
    label: 'can stored new field',
    test() {
      const model = new Model();
      const newFieldKey = 'newFieldKey';
      const newFieldValue = 'newFieldValue';

      model.set(newFieldKey, newFieldValue);

      expect(model.get(newFieldKey)).toBe(newFieldValue);
    }
  }, {
    label: 'can check if field exists',
    test() {
      const model = new Model();
      const newFieldKey = 'newFieldKey';
      const newFieldValue = 'newFieldValue';

      model.set(newFieldKey, newFieldValue);

      expect(model.has(newFieldKey)).toBe(true);
    }
  }, {
    label: 'throws error while getting missing field',
    test() {
      const model = new Model();
      const missingFieldKey = 'missingField';

      try {
        model.get(missingFieldKey);
      } catch (e) {
        expect(e.message).toBe(`No field in model for key: ${missingFieldKey}`);
      }
    }
  }, {
    label: 'allow to chain set operation',
    test() {
      const model = new Model();
      const firstFieldKey = 'abc';
      const firstFieldValue = 'test1';
      const secondFieldKey = 'xyz';
      const secondFieldValue = 'test2';

      model
        .set(firstFieldKey, firstFieldValue)
        .set(secondFieldKey, secondFieldValue);

      expect(model.get(firstFieldKey)).toBe(firstFieldValue);
      expect(model.get(secondFieldKey)).toBe(secondFieldValue);
    }
  }, {
    label: 'allow to chain set and get operation',
    test() {
      const model = new Model();
      const firstFieldKey = 'abc';
      const firstFieldValue = 'test1';
      const secondFieldKey = 'xyz';
      const secondFieldValue = 'test2';

      model.set(firstFieldKey, firstFieldValue);
      const secondFieldFromState = model
        .set(secondFieldKey, secondFieldValue)
        .get(secondFieldKey);

      expect(model.get(firstFieldKey)).toBe(firstFieldValue);
      expect(secondFieldFromState).toBe(secondFieldValue);
    }
  }, {
    label: 'allow to set multiple value',
    test() {
      const model = new Model();
      const firstFieldKey = 'abc';
      const firstFieldValue = 'test1';
      const secondFieldKey = 'xyz';
      const secondFieldValue = 'test2';

      model.update({
        [firstFieldKey]: firstFieldValue,
        [secondFieldKey]: secondFieldValue,
      });

      expect(model.get(firstFieldKey)).toBe(firstFieldValue);
      expect(model.get(secondFieldKey)).toBe(secondFieldValue);
    }
  }],
};
