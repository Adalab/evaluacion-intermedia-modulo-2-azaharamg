"use strict";

const defaultData = {
  input: "",
  clue: "Escribe el número y dale a Prueba",
  try: 0
};

//Get DOM elements
const getElements = selector => {
  return document.querySelector(selector);
};

//Function to get a random number
const getRandomNumber = max => {
  return Math.ceil(Math.random() * max);
};
let randomNumber = getRandomNumber(100);
console.log(`El número random generado es: ${randomNumber}`);

//Function to paint clue result
const paintClueResult = string => {
  let element = getElements(".js-clue");
  element.innerHTML = string;
};

//Function to compare two numbers
const checkNumbers = number => {
  const inputValue = parseInt(getElements(".js-input").value);
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
  getElements(".js-try").innerHTML = acc;
};

//Callback function
const handleValue = event => {
  event.preventDefault();
  //Manage when the user hits the button and the input is empty
  const inputValue = getElements(".js-input").value;
  if (inputValue === "") {
    paintClueResult("Introduce un número correcto");
  } else {
    checkNumbers(randomNumber);
    counter();
  }
};
const buttonEl = getElements(".js-button");
buttonEl.addEventListener("click", handleValue);

//reset function
const handleReset = event => {
  event.preventDefault();
  getElements(".js-input").value = defaultData.input;
  getElements(".js-clue").innerHTML = defaultData.clue;
  getElements(".js-try").innerHTML = defaultData.try;
  randomNumber = getRandomNumber(100);
  console.log(`Numero random generado tras reset: ${randomNumber}`);
};

const resetEl = getElements(".js-reset");
resetEl.addEventListener("click", handleReset);
