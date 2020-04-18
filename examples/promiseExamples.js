const aPromise = new Promise(((resolve) => resolve(true)));
const bPromise = new Promise(((resolve, reject) => reject('error')));

aPromise.then(value => {
  console.log(['aPromise resoled value'], value);
});

bPromise.catch(reason => {
  console.log(['bPromise rejected reason'], reason);
});

// we need IFEE because JavaScript cannot handle top level async/await syntax
(async () => {
  const resolvedValue = await aPromise;
  console.log(['async/await aPromise resoled value'], resolvedValue);

  try {
    await bPromise;
  } catch (reason) {
    console.log(['async/await bPromise rejected reason'], reason);
  }
})();