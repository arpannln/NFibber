//initialize global array to memoize our solutions
var Fibholder = [0, 1];

const returnNthFib = (n) => {
  if ( n < 0 ) {
    return null;
  }

  if (n < 2) {
    return Fibholder[n];
  }

  while (Fibholder.length <= n) {
    Fibholder.push(Fibholder[Fibholder.length - 1] + Fibholder[Fibholder.length - 2]);
    //save operations once hardware only returns infinity
    if (Fibholder[Fibholder.length - 1] === Infinity) {
      break;
    }
  }

  return Fibholder[n] || Fibholder[Fibholder.length - 1];
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

const centerX = 250;
const centerY = 250;

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

//iterate through and draw our partial arcs
const updateCanvas = (userInput) => {
   let canvas = document.getElementById('myCanvas');
   let ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, 500, canvas.height);

   //need a scale to optimize visuals
   let scale = 25/userInput;
   ctx.lineWidth = 8;
   let i = 2;

   ctx.beginPath();
   ctx.strokeStyle = randomColor();
   ctx.arc(centerX, centerY, scale * Fibholder[1], 2*Math.PI, 1.5*Math.PI, true);
   ctx.stroke();

   while (i <= userInput) {
     //until hardware gets better save operations.
     if (Fibholder[i] === Infinity) {
       break;
     }
     //#proprietarycode
     //these two variables adjust for Canvas's lame way of drawing circles
     //offset to adjust radius
     //scaledRotationReduction to adjust for degrees
     let offset = scale * (Fibholder[i] - Fibholder[i - 1]);
     let scaledRotationReduction =  i * Math.PI / 360;

     ctx.beginPath();
     ctx.strokeStyle = randomColor();
     switch ( i % 4 ) {
       case 0:
         ctx.arc(centerX, centerY - offset, scale * Fibholder[i], 0.5*Math.PI - scaledRotationReduction, 0 + scaledRotationReduction, true);
         ctx.stroke();
         break;
       case 1:
         ctx.arc(centerX - offset, centerY, scale * Fibholder[i], 2*Math.PI - scaledRotationReduction, 1.5*Math.PI + scaledRotationReduction, true);
         ctx.stroke();
         break;
       case 2:
         ctx.arc(centerX, centerY + offset, scale * Fibholder[i], 1.5*Math.PI - scaledRotationReduction, Math.PI + scaledRotationReduction, true);
         ctx.stroke();
         break;
       case 3:
         ctx.arc(centerX + offset, centerY, scale * Fibholder[i], Math.PI - scaledRotationReduction, 0.5*Math.PI + scaledRotationReduction, true);
         ctx.stroke();
         break;
     }

     i += 1;

   }
};
