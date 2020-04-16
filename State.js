import Model from './Model.js'

export default class State extends Model {
  constructor() {
    super();
    const initialState = State.createInitialState();
    this.update(initialState);
  }

  static createInitialState() {
    return {
      activeViewId: '',
    };
  }
}