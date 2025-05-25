import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];

  const topSuit = document.querySelector("#topSuit");
  const numb = document.querySelector("#number");
  const bottomSuit = document.querySelector("#bottomSuit");
  const cardElement = document.querySelector(".card");
  const btn = document.querySelector("#btn");



  function toggleCard() {
    const randomNumb = Math.floor(Math.random() * numbers.length);
    const randomSuits = Math.floor(Math.random() * suits.length);
    const selectedSuit = suits[randomSuits];
    
    const suitClasses = {
      "♦": "diamond",
      "♥": "heart",
      "♠": "spade",
      "♣": "club"
    };
    
    topSuit.innerHTML = selectedSuit;
    numb.innerHTML = numbers[randomNumb];
    bottomSuit.innerHTML = selectedSuit;

    cardElement.classList.remove("diamond", "heart", "spade", "club");
    cardElement.classList.add(suitClasses[selectedSuit])
  }

  toggleCard();

btn.addEventListener("click", toggleCard)

};
