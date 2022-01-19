let sequence = [];
let clickedSequence = [];

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

let lightColor = (element, number) => {
  number = number *500;
  // add class selected
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
// remove class selected
  setTimeout(() => {
    element.classList.remove('selected')
  }, number - 250)
}

let checkOrder = () => {
  for(let i in clickedSequence) {
    if(clickedSequence[i] != order[i]) {
      lose();
      break;
    }
    if(clickedSequence.length == sequence.length) {
      alert(`Parabéns!\n Pontuação: ${score}!`)
      nextLevel();
    }
  }
}

let click = (color) => {
  clickedSequence[clickedSequence.length] = color;
  elementColor(color).classList.add('selected')

 setTimeout(() => {
    createColorElement(color).classList.remove('selected')
  })

  checkOrder();
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