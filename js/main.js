"use strict";

const randomNumber = function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
};
randomNumber(100);
console.log(randomNumber(100));

function handleFormSubmit(event) {
  event.preventDefault();
}

const checkNumbers = () => {
  const inputValue = document.querySelector(".js-input");
  console.log(inputValue);
  let pistaEl = document.querySelector(".js-clue");
  if (inputValue > randomNumber) {
    pistaEl.innerHTML = "Demasiado alto";
  } else if (inputValue < randomNumber) {
    pistaEl.innerHTML = "Demasiado bajo";
  } else if (inputValue === randomNumber) {
    pistaEl.innerHTML = "Has ganado campeona!!!";
  } else {
    pistaEl.innerHTML = "El número debe estar entre 1 y 100";
  }
};

const handleValue = () => {
  handleFormSubmit(event);
  checkNumbers();
  counter();
};

const counter = () => {
  let acc = 0;
  if (handleValue) {
    acc += 1;
  }
  document.querySelector(".js-try").innerHTML = acc;
};

const buttonEl = document.querySelector(".js-button");
buttonEl.addEventListener("click", handleValue);
