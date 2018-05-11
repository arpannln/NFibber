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
  if ( n <= Fibholder.length - 1 ) return;

  let lastEl = Fibholder[Fibholder.length - 1];
  let secondLastEl = Fibholder[Fibholder.length - 2];
  let nextEl = lastEl + secondLastEl;

  Fibholder.push(nextEl);

  buildUpToN(n);
};


const updateVisuals = () => {
  let userInput = document.getElementById('userInput').value;
  if (isValidInput(userInput)) {
    updateAnswer(userInput);
  } else {
    flashError();
    return;
  }
  updateCanvas(userInput);
};

const updateAnswer = (userInput) => {
  let answerContainer = document.getElementById('answer');
  answerContainer.classList.remove('error');
  let answer = returnNthFib(userInput);

  answerContainer.innerHTML = answer;

  return answer;
};

const isValidInput = (userInput) => {
  return userInput >= 0;
};

const flashError = () => {
   let answerContainer = document.getElementById('answer');
   answerContainer.innerHTML = "See why n can't be negative below";
   answerContainer.classList.add('error');
};

const updateCanvas = () => {
    
};
