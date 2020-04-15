class Model {
  constructor() {
    console.log('Model created');
  }

  get(key) {
    if (!this.has(key)) {
      throw new Error(`No field in model for key: ${key}`)
    }

    return this[key];
  }

  set(key, value) {
    this[key] = value;

    return this;
  }

  update(partial) {
    Object.entries(partial).forEach(([key, value]) => this.set(key, value));
  }

  has(key) {
    return this.hasOwnProperty(key);
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }
}

class State extends Model {
  constructor(props) {
    console.log('State created');
    super(props);
    const initialState = State.createInitialState();
    this.update(initialState);
  }

  static createInitialState() {
    return {
      activeViewId: '',
    };
  }
}

const state = new State();

state.set('activeViewId', 'test');

const activeViewId = state.get('activeViewId');

console.log(['activeViewId'], activeViewId);

try {
  state.get('missingField');
} catch (e) {
  console.log(['no field']);
}

state.set('test', 1).set('test2', true);

state.print();

class ResourceModel extends Model {
  loading = false;
  error = '';
  data = null;

  constructor(props) {
    console.log('ResourceModel created');
    super(props);
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

const resource = new ResourceModel();

resource.print();

resource.startLoading();

fetch('./data.json').then(response => {
  console.log(['response'], response);

  response.json().then(data => {
    resource.stopLoading(data);
    resource.print();
  });
}).catch(error => resource.handleError(error));

resource.print();
