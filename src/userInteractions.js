//initialize global array to memoize our solutions
var Fibholder = [0, 1];

const returnNthFib = (n) => {
  if ( n < 0 ) {
    return null;
  }
  
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

//update page based on user interaction and error handle
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

const centerX = 145;
const centerY = 80;

const updateAnswer = (userInput) => {
  let answerContainer = document.getElementById('answer');
  answerContainer.classList.remove('error');
  let answer = returnNthFib(userInput);
  answerContainer.innerHTML = `${answer}`;
  return answer;
};

const isValidInput = (userInput) => {
  return userInput !== '' && userInput >= 0;
};

const flashError = () => {
  let answerContainer = document.getElementById('answer');
  answerContainer.innerHTML = 'Please enter a positive number :)';
  answerContainer.classList.add('error');
};

//decent shades of green
const greens = [
  '#76b900',
  '#85c01c',
  '#94c838',
  '#a3d055',
  '#b2d871',
  '#68a400',
  '#5b8f00',
  '#4e7b00',
  '#416600',
  '#345200'
];

const randomGreen = () => {
  return greens[Math.floor(Math.random() * greens.length)];
};

const updateCanvas = (userInput) => {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 500, canvas.height);

  //we want our presentation to scale with the magnitude  of user input
  let scale = 10 / userInput;
  ctx.lineWidth = 4;
  let i = 1;

  //use canvas to draw spirals representing Fibonacci numbers.
  while (i <= userInput) {
    ctx.beginPath();
    ctx.strokeStyle = randomGreen();
    let offset = scale * (Fibholder[i] - Fibholder[i - 1]);

    switch ( i % 4 ) {
      case 0:
        ctx.arc(centerX, centerY, scale * Fibholder[i], Math.PI, 0.5*Math.PI, true);
        ctx.stroke();
        break;
      case 1:
        ctx.arc(centerX, centerY, scale * Fibholder[i], 0.5*Math.PI, 0*Math.PI, true);
        ctx.stroke();
        break;
      case 2:
        ctx.arc(centerX, centerY, scale * Fibholder[i], 2*Math.PI, 1.5*Math.PI, true);
        ctx.stroke();
        break;
      case 3:
        ctx.arc(centerX, centerY, scale * Fibholder[i], 1.5*Math.PI, Math.PI, true);
        ctx.stroke();
        break;
    }

    i += 1;
  }
};
