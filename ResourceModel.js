import Model from './Model.js'

export default class ResourceModel extends Model {
  static createInitialState() {
    return { loading: false, error: null, data: null };
  }

  constructor() {
    super();
    this.update(ResourceModel.createInitialState())
  }

  startLoading() {
    this.update({ loading: true, error: null, data: null });
  }

  stopLoading(data) {
    this.update({ loading: false, data });
  }

  handleError(error) {
    this.update({ loading: false, error });
  }
}