/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let suit = generateRandomSuit();
  document.querySelector(".card").classList.add("generateRandomSuit");
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".topsuit").innerHTML = suit;
  document.querySelector(".bottomsuit").innerHTML = suit;
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let topSuit = ["♦", "♥", "♠", "♣"];
  let indexSuit = topSuit[Math.floor(Math.random() * topSuit.length)];
  if (indexSuit === topSuit[1] || indexSuit === topSuit[0]) {
    document.getElementsByClassName("topsuit")[0].style.color = "red";
    document.getElementsByClassName("bottomsuit")[0].style.color = "red";
  }
  return indexSuit;
};
