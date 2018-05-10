//initialize global array to memoize our solutions
var Fibholder = [0, 1];

//building bottom up so we minimize # of operations
const returnNthFib = (n) => {
  //build our solution space up to n if needed
  buildUpToN(n);

  return Fibholder[n];
};


//building bottom up so we minimize # of operations
const buildUpToN = (n) => {
  if ( n === Fibholder.length - 1 ) return;

  let lastEl = Fibholder[Fibholder.length - 1];
  let secondLastEl = Fibholder[Fibholder.length - 2];
  let nextEl = lastEl + secondLastEl;

  Fibholder.push(nextEl);

  buildUpToN(n);
};
