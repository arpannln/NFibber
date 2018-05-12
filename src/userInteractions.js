//initialize global array to memoize our solutions
var Fibholder = [0, 1];

const returnNthFib = (n) => {
  if ( n < 0 ) {
    return null;
  }

  while (Fibholder.length <= n) {
    Fibholder.push(Fibholder[Fibholder.length - 1] + Fibholder[Fibholder.length - 2]);
  }

  return Fibholder[n];
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
const centerY = 75;

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
  let errorHolder = document.getElementById('error-back');
  errorHolder.style.display = "flex";
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //we want our presentation to scale with the magnitude  of user input
  let scale = 10 / userInput;
  ctx.lineWidth = 4;
  let i = 1;
  let angles =[1.5*Math.PI, Math.PI, 0.5*Math.PI, 0];

  //use canvas to draw spirals representing Fibonacci numbers.
  //rotating through Fibnumbers as well as associated angles
  while (i <= userInput) {
    ctx.beginPath();
    ctx.strokeStyle = randomGreen();
    let offset = scale * (Fibholder[i] - Fibholder[i - 1]);
    ctx.arc(centerX, centerY, scale * Fibholder[i], angles[i % 4], angles[ (i+1) % 4], true);
    ctx.stroke();

    i += 1;
  }
};
