/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add("generateRandomSuit");
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".topsuit").innerHTML = generateRandomSuit();
  document.querySelector(".bottomsuit").innerHTML = generateRandomSuit2();
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let topSuit = ["♦", "♥", "♠", "♣"];
  let indexSuit = topSuit[Math.floor(Math.random() * topSuit.length)];
  if (indexSuit === topSuit[1] || indexSuit === topSuit[3]) {
    document.getElementsByClassName("topsuit")[0].style.color = "red";
  }
  return indexSuit;
};
let generateRandomSuit2 = () => {
  let bottomSuit = ["♦", "♥", "♠", "♣"];
  let indexSuit = bottomSuit[Math.floor(Math.random() * bottomSuit.length)];
  if (indexSuit === bottomSuit[1] || indexSuit === bottomSuit[3]) {
    document.getElementsByClassName("bottomsuit")[0].style.color = "red";
  }
  return indexSuit;
};
