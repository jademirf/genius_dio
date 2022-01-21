let sequence = [];
let clickedSequence = [];
let score = 0;

// 0 - green | 1 - red | 2 - yellow | 3 - blue

const green = document.getElementById('green')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')

// generate random color order

let shufleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  sequence[sequence.length] = colorOrder;
  clickedSequence = [];

  for (let i in sequence) {
    let elementColor = createColorElement(sequence[i]);
    lightColor(elementColor, Number(i) + 1)
  }
}

// lights the next color in sequence
let lightColor = (element, number) => {
  number = number *500;
  // add class selected
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250);
// remove class selected
  setTimeout(() => {
    element.classList.remove('selected')
  }, number)
}

let checkOrder = () => {
  for(let i in clickedSequence) {
    if(clickedSequence[i] != sequence[i]) {
      // debugger
      gameOver();
      break;
    }
  }
  if(clickedSequence.length == sequence.length) {
    alert(`Parabéns!\n Pontuação: ${score}`)
    nextLevel();
  }
}

// handle user click
let click = (color) => {
  clickedSequence[clickedSequence.length] = color;
  createColorElement(color).classList.add('selected')

 setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder();
  }, 250)

}

// creates function to return color
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if(color == 1) {
    return red;
  } else if(color == 2) {
    return yellow;
  } else if(color == 3) {
    return blue;
  }
}

// creates function to call game next level

let nextLevel = () => {
  score++;
  shufleOrder();
}

// game over function
let gameOver = () => {
  alert(`Pontuação: ${score}!\nYou lose!\nClick ok to start a new game.`)
  sequence = [];
  clickedSequence = [];

  playGame();
}

// function to start a new game
let playGame = () => {
  alert('Welcome to genius! \nStart a new game!')
  score = 0

  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//start game
playGame();