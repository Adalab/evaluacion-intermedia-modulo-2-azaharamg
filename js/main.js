"use strict";

const randomNumber = function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
};
console.log(randomNumber(100));

function handleFormSubmit(event) {
  event.preventDefault();
}

const checkNumbers = number => {
  const inputValue = document.querySelector(".js-input").value;
  console.log(inputValue);
  let pistaEl = document.querySelector(".js-clue");
  if (inputValue > number) {
    pistaEl.innerHTML = "Demasiado alto";
  } else if (inputValue < number) {
    pistaEl.innerHTML = "Demasiado bajo";
  } else if (inputValue === number) {
    pistaEl.innerHTML = "Has ganado campeona!!!";
  } else {
    pistaEl.innerHTML = "El número debe estar entre 1 y 100";
  }
};

const handleValue = () => {
  handleFormSubmit(event);
  const number = randomNumber(100);
  checkNumbers(number);
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
