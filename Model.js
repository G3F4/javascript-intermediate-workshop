export default class Model {
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
    Object.entries(partial).forEach(
      ([key, value]) => this.set(key, value)
    );
  }

  has(key) {
    return this.hasOwnProperty(key);
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }
}
