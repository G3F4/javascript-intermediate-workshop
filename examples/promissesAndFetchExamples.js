const aPromise = new Promise(((resolve) => resolve(true)));
const bPromise = new Promise(((resolve, reject) => reject('error')));

aPromise.then(value => {
  console.log(['aPromise resoled value'], value);
});

bPromise.catch(reason => {
  console.log(['bPromise rejected reason'], reason);
});
