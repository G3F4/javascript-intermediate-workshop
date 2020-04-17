import Model from './Model.js'

export default class State extends Model {
  constructor() {
    super();
    this.clear();
  }

  static createInitialState() {
    return {
      activeViewId: '',
    };
  }

  clear() {
    const initialState = State.createInitialState();
    this.update(initialState);
  }
}