import Model from './Model.js'

export default class Resource extends Model {
  static createInitialState() {
    return { loading: false, error: null, data: null };
  }

  constructor() {
    super();
    this.update(Resource.createInitialState())
  }

  startLoading() {
    this.update({ loading: true, error: null });
  }

  isLoading() {
    return this.get('loading');
  }

  getData() {
    return this.get('data');
  }

  getError() {
    return this.get('error');
  }

  stopLoading(data) {
    this.update({ loading: false, data });
  }

  handleError(error) {
    this.update({ loading: false, error });
  }
}