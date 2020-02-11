import "../style/index.scss";

window.onload = () => {
  document.querySelector("card").classList.add(generateRandomSuit());
  document.querySelector("card").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "Q",
    "K"
  ];
  let suit = ["diamond", "spade", "heart", "club"];

  let indexNumbers = Math.floor(Math.random() * numbers.length);
  let indexNumbers = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
