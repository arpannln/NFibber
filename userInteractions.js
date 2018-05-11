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

const updateCanvas = (userInput) => {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext("2d");
  //arc(x,y,r,startangle,endangle)
 //one round of spirals is this
 //ctx.beginPath();
// ctx.arc(100,60,1,0,.5*Math.PI);
// ctx.stroke();
// ctx.arc(95,50,30,.5*Math.PI, 1*Math.PI);
// ctx.stroke();
// ctx.arc(105,45,40, 1*Math.PI, 1.5*Math.PI);
// ctx.stroke();
// ctx.arc(115,55,50, 1.5*Math.PI, 2*Math.PI);
// ctx.stroke();

  for (let i = 0; i <= userInput; i++) {
    // ctx.arc
  }
};
