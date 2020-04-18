function addToTwoFactory() {
  const base = 2;

  return (number) => base + number;
}

const addToTwo = addToTwoFactory();

console.log(['addToTwo + 3'], addToTwo(3));

function addToFactory(base) {
  return (number) => base + number;
}

const addToOne = addToFactory(1);

console.log(['addToOne + 3'], addToOne(3));
console.log(['addToOne + 3'], addToFactory(1)(3));

function func(value = 1) {
  // const value = 2; -> Block scoped variables cannot share name with 'var' variables or parameters in the same block scope
  {
    const value = 3; // ok, nowe domknięcie o zasięgu nawiasów klamrowych
  }

  return (value = 4) => { // ok, nowa funkcja z własnym argumentem, przesłania argument wyżej
    // const value = 5; -> Block scoped variables cannot share name with 'var' variables or parameters in the same block scope
    for (let value = 6; value > 0; value--) { // ok, pętla for w połączeniu z let albo const tworzy domknięcia podczas iteracji

    }

    return (value = 7) => { // i tak dalej w nieskończoność przesłaniać można te same nazwy w zasięgu
      // ...
      return value;
    }
  }
}

console.log(['func()()()'], func()()());