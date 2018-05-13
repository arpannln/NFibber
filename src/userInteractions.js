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
    //upper limit where infinity is always returned so may as well save operations.
    if (userInput > 1476) {
      userInput = '1477';
    }
    updateAnswer(userInput);
  } else {
    flashError();
    return;
  }
  updateCanvas(userInput);
};

const centerX = 150;
const centerY = 75;

const updateAnswer = (userInput) => {
  let answerContainer = document.getElementById('answer');
  answerContainer.classList.remove('error');
  let answer = returnNthFib(userInput);
  answerContainer.innerHTML = `${answer}`;
  return answer;
};

const isValidInput = (userInput) => {
  //check if input consists of only digits
  let reg = /^\d+$/;
  return reg.test(userInput) && userInput !== '';
};

const flashError = () => {
  let errorHolder = document.getElementById('error-back');
  errorHolder.style.display = "flex";
};

//decent shades of green
const colors = [
  '#93ff68',
  '#e4ff55',
  '#ffb543',
  '#ff5a5a',
  '#c660ff',
  '#0099cc',
  '#FF1493'
];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const updateCanvas = (userInput) => {
   let canvas = document.getElementById('myCanvas');
   let ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, 500, canvas.height);
   let scale = 10 / userInput;
   ctx.lineWidth = 5;
   let i = 2;

   ctx.beginPath();
   ctx.strokeStyle = randomColor();
   ctx.arc(centerX, centerY, scale * Fibholder[1], 2*Math.PI, 1.5*Math.PI, true);
   ctx.stroke();

   while (i <= userInput) {
     let offset = scale * (Fibholder[i] - Fibholder[i - 1]);

     ctx.beginPath();
     ctx.strokeStyle = randomColor();
     switch ( i % 4 ) {
       case 0:
         ctx.arc(centerX, centerY - offset, scale * Fibholder[i], 0.5*Math.PI, 0, true);
         ctx.stroke();
         break;
       case 1:
         ctx.arc(centerX - offset, centerY, scale * Fibholder[i], 2*Math.PI, 1.5*Math.PI, true);
         ctx.stroke();
         break;
       case 2:
         ctx.arc(centerX, centerY + offset, scale * Fibholder[i], 1.5*Math.PI, Math.PI, true);
         ctx.stroke();
         break;
       case 3:
         ctx.arc(centerX + offset, centerY, scale * Fibholder[i], Math.PI, 0.5*Math.PI, true);
         ctx.stroke();
         break;
     }

     i += 1;

   }
};
