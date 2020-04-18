class Base {
  constructor() {
    console.log('Base class instance created');
  }

  undefinedField;
  stringField = '';
  booleanField = true;
  arrayField = [];
  objectField = {};
  functionField = function() { console.log(['functionField']); };
  functionWithArrowField = () => { console.log(['functionWithArrowField']); };
  nullField = null;

  print() {
    console.log(JSON.stringify(this, null, 2));
  }
}

class A extends Base {
  constructor() {
    super();
    console.log('A class instance created');
  }

  aField = 'aField';

  aMethod() {
    console.log('aMethod');
    this.print();
  }
}

class B extends A {
  constructor() {
    super();
    console.log('B class instance created');
  }

  bField = 'bField';

  bMethod() {
    console.log('bMethod');
  }
}

class C extends Base {
  constructor(initialData) {
    console.log('C class instance created');
    super();
    this.data = initialData;
  }
}

class D extends C {
  constructor(...args) {
    console.log('D class instance created');
    super(...args);
  }
}

const aInstance = new A();
aInstance.aMethod();
aInstance.print();
aInstance.aField === 'aField';

const bInstance = new B();
bInstance.bMethod();
bInstance.aMethod();
bInstance.print();
bInstance.bField === 'aField';