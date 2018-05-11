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

  answerContainer.innerHTML = `The ${userInput}th Fibonacci number is... ${answer}`;

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


//this gets a bit tricky
const greens = [
  "#76b900",
  "#85c01c",
  "#94c838",
  "#a3d055",
  "#b2d871",
  "#68a400",
  "#5b8f00",
  "#4e7b00",
  "#416600",
  "#345200"
];

const randomGreen = () => {
  return greens[Math.floor(Math.random() * greens.length)];

};

const updateCanvas = (userInput) => {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 500, canvas.height);
  let scale = 50 / userInput;
  ctx.lineWidth = 5;
  let i = 3;

  ctx.beginPath();
  ctx.strokeStyle = randomGreen();
  ctx.arc(150, 100, scale * Fibholder[1], 0, 0.5*Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = randomGreen();
  ctx.arc(150, 100, scale * Fibholder[2], .5*Math.PI, Math.PI);
  ctx.stroke();

  while (i <= userInput) {
    ctx.beginPath();
    ctx.strokeStyle = randomGreen();
    let offset = scale * (Fibholder[i] - Fibholder[i - 1]);
    switch ( i % 4 ) {
      case 0:
        ctx.arc(150 + offset, 100 + offset, scale * Fibholder[i], 1.5*Math.PI, 2*Math.PI);
        ctx.stroke();
        break;
      case 1:
        ctx.arc(150, 100 + offset, scale * Fibholder[i], 0, 0.5*Math.PI);
        ctx.stroke();
        break;
      case 2:
        ctx.arc(150, 100, scale * Fibholder[i], .5*Math.PI, Math.PI);
        ctx.stroke();
        break;
      case 3:
        ctx.arc(150 + offset, 100, scale * Fibholder[i], Math.PI, 1.5*Math.PI);
        ctx.stroke();
        break;
    }

    i += 1;

  }
};
