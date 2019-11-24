"use strict";

//Function to get a random number
const getRandomNumber = max => {
  return Math.ceil(Math.random() * max);
};
const randomNumber = getRandomNumber(100);
console.log(`El número random generado es: ${randomNumber}`);

//Function to paint clue result
const paintClueResult = string => {
  let element = document.querySelector(".js-clue");
  element.innerHTML = string;
};

//Function to compare two numbers
const checkNumbers = number => {
  const inputValue = parseInt(document.querySelector(".js-input").value);

  if (inputValue < 1 || inputValue > 100) {
    paintClueResult("El número debe estar entre 1 y 100");
  } else if (inputValue > number) {
    paintClueResult("Demasiado alto");
  } else if (inputValue < number) {
    paintClueResult("Demasiado bajo");
  } else {
    paintClueResult("Has ganado campeona!!!");
  }
};

//Function to count how many times the user tries to win
let acc = 0;
const counter = () => {
  acc += 1;
  document.querySelector(".js-try").innerHTML = acc;
};

//Callback function
const handleValue = event => {
  event.preventDefault();
  checkNumbers(randomNumber);
  counter();
};
const buttonEl = document.querySelector(".js-button");
buttonEl.addEventListener("click", handleValue);
